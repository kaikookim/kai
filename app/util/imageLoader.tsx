"use client";
import { ImageLoaderProps } from "next/image";

export default function myImageLoader({
  src,
  width,
  quality,
}: ImageLoaderProps) {
  return `https://kaikookim.github.io/kai/${src}?w=${width}&q=${quality || 75}`;
}
