'use client';

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function SearchBar() {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <div className={`flex-1 md:flex-initial flex items-center gap-4 transition-all ${isSearchFocused ? 'flex-grow' : ''}`}>
      <div className="relative flex-1 max-w-md">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search..."
          className="pl-8 bg-muted/50"
          onFocus={() => setIsSearchFocused(true)}
          onBlur={() => setIsSearchFocused(false)}
        />
      </div>
    </div>
  );
}