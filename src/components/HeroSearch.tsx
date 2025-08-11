"use client";

import { useState, useMemo, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";

const COUNTRIES = [
  "France", "Germany", "Italy", "Spain", "Netherlands", "Switzerland", "Sweden",
  "Greece", "Austria", "Belgium", "Portugal", "USA", "United Kingdom",
  "Canada", "Australia", "New Zealand", "Japan", "China"
];

export default function HeroSearch() {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Filter countries
  const filteredCountries = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase().trim();
    return COUNTRIES.filter(c => c.toLowerCase().includes(q)).slice(0, 8);
  }, [query]);

  // Navigate to pricing
  const handleNavigation = useCallback(async (country?: string) => {
    const target = (country ?? query).trim();
    if (!target) return;
    setIsLoading(true);
    try {
      await router.push(`/pricing?country=${encodeURIComponent(target)}`);
    } finally {
      setIsLoading(false);
    }
  }, [query, router]);

  // Keyboard support
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (!showDropdown || filteredCountries.length === 0) {
      if (e.key === "Enter") {
        e.preventDefault();
        handleNavigation();
      }
      return;
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex(p => (p < filteredCountries.length - 1 ? p + 1 : 0));
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex(p => (p > 0 ? p - 1 : filteredCountries.length - 1));
        break;
      case "Enter":
        e.preventDefault();
        if (selectedIndex >= 0) handleNavigation(filteredCountries[selectedIndex]);
        else handleNavigation();
        setShowDropdown(false);
        break;
      case "Escape":
        setShowDropdown(false);
        setSelectedIndex(-1);
        inputRef.current?.blur();
        break;
    }
  }, [showDropdown, filteredCountries, selectedIndex, handleNavigation]);

  // Input change
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setSelectedIndex(-1);
    setShowDropdown(value.trim().length > 0);
  }, []);

  // Pick suggestion
  const handleCountrySelect = useCallback((country: string) => {
    setQuery(country);
    setShowDropdown(false);
    setSelectedIndex(-1);
    handleNavigation(country);
  }, [handleNavigation]);

  // Show dropdown on focus if there's text
  const handleFocus = useCallback(() => {
    if (query.trim()) setShowDropdown(true);
  }, [query]);

  // Delay hide so clicks can register
  const handleBlur = useCallback(() => {
    setTimeout(() => {
      if (!dropdownRef.current?.contains(document.activeElement)) {
        setShowDropdown(false);
        setSelectedIndex(-1);
      }
    }, 150);
  }, []);

  return (
    <div className="w-full relative">
      {/* Search container */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1">
          <span
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg"
            aria-hidden="true"
          >
            🔎
          </span>
          <input
            ref={inputRef}
            value={query}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="Type a destination (e.g., France, USA, Japan)"
            className="h-14 w-full rounded-2xl border-2 border-slate-200 bg-white/90 backdrop-blur
                     pl-12 pr-5 text-base placeholder:text-slate-400
                     outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-400
                     hover:border-slate-300 transition-all duration-200 shadow-sm
                     hover:shadow-md focus:shadow-lg"
            aria-label="Search destination country"
            aria-expanded={showDropdown}
            aria-haspopup="listbox"
            aria-autocomplete="list"
            aria-controls="country-suggestions"
            role="combobox"
            disabled={isLoading}
          />
        </div>

        <button
          onClick={() => handleNavigation()}
          disabled={isLoading}
          className="h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 text-sm font-semibold
                     shadow-sm hover:from-blue-700 hover:to-indigo-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isLoading ? "Loading..." : "Find Visa"}
        </button>
      </div>

      {/* Dropdown */}
      {showDropdown && filteredCountries.length > 0 && (
        <div
          ref={dropdownRef}
          id="country-suggestions"
          className="absolute top-full left-0 right-0 mt-3 w-full
                   overflow-hidden rounded-2xl border border-slate-200 bg-white/95
                   backdrop-blur shadow-2xl z-20"
          role="listbox"
          aria-label="Country suggestions"
        >
          {filteredCountries.map((country, index) => (
            <button
              key={country}
              onMouseDown={(e) => e.preventDefault()} // avoid blur before click
              onClick={() => handleCountrySelect(country)}
              className={`w-full text-left px-5 py-4 transition-colors text-base ${
                index === selectedIndex
                  ? "bg-blue-50 text-blue-900 border-l-4 border-blue-500"
                  : "hover:bg-slate-50 text-slate-700"
              }`}
              role="option"
              aria-selected={index === selectedIndex}
            >
              <span className="font-medium">{country}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}