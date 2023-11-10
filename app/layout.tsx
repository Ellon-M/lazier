"use client"

import './globals.css'
import { Inter } from 'next/font/google'
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

declare global {
  interface Article {
    _id: string;
    author: string;
    createdAt: string;
    updatedAt: string;
    desc?: string;
    pinboards: any[];
    content: string;
    title: string;
  }

  interface Pins {
    _id: string;
    author: string;
    createdAt: string;
    updatedAt: string;
    articles: any[];
    name: string;
    icon: string;
  }
}

const inter = Inter({ subsets: ['latin'] })
  
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <DndProvider backend={HTML5Backend}>
        <body className={inter.className}>{children}</body>
      </DndProvider>
    </html>
  )
}
