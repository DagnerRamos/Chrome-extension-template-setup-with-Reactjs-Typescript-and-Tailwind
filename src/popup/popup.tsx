import React from 'react';
import '../assets/tailwind.css';
import { createRoot } from 'react-dom/client';
const PopUpRoot = (
            <div className = "box-border w-[24rem] h-[32rem] text-[var(--text-color)] bg-[var(--bg-color)]"> 
                <div className="pt-4 pl-4">
                    <h1 className="text-5xl"> Hello 新世界</h1>
                </div>
            </div>
)

const container = document.createElement('div');
document.body.appendChild(container);
const root = createRoot(container);
root.render(PopUpRoot)