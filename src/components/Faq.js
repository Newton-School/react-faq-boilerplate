import React, { useState } from "react";

export const Faq = ({ title, text }) => {

    return (
        <div className={`faq ${active ? 'active' : ''}`}>
            <h3 className="faq-title">
                {title}
            </h3>
            <p className="faq-text">{text}</p>
            <button class="faq-toggle">
                <i class="fas fa-chevron-down"></i>
                <i class="fas fa-times"></i>
            </button>
        </div>
    )
}