import { Card } from "@/components/ui/card";
import { FileText, Image } from "lucide-react";
import Link from "next/link";

export function QuickTemplates() {
  return (
    <Card className="w-full max-w-xl mx-auto bg-white rounded-lg px-6 py-4 border-none shadow-lg">
      <h1 className="text-base font-normal text-slate-800 mb-4">
        Quick Templates
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Link href="/blog-post">
          <Card className="group hover:shadow-md transition-shadow duration-200 py-3 flex flex-col items-center justify-center gap-1 rounded-lg cursor-pointer bg-white">
            <FileText
              className="w-4 h-4 text-slate-600 group-hover:text-slate-800 transition-colors"
              strokeWidth={1.5}
            />
            <h2 className="text-sm font-normal text-slate-700 group-hover:text-slate-900">
              Blog Post
            </h2>
          </Card>
        </Link>

        <Link href="/photo-gallery">
          <Card className="group hover:shadow-md transition-shadow duration-200 py-3 flex flex-col items-center justify-center gap-1 rounded-lg cursor-pointer bg-white">
            <Image
              className="w-4 h-4 text-slate-600 group-hover:text-slate-800 transition-colors"
              strokeWidth={1.5}
            />
            <h2 className="text-sm font-normal text-slate-700 group-hover:text-slate-900">
              Photo Gallery
            </h2>
          </Card>
        </Link>
      </div>
    </Card>
  );
}
