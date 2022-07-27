import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './style.css'

export const Buttons = () => {
    const [ t, i18n] = useTranslation("global")
    const language = [{ language: "Español", abrev: "es" }, { language: "English", abrev: "en" }]

    return (
        <div className="learning-options-container">
            {
                language.map((option) => (
                    <button
                        className="learning-option-button"
                        key={option.abrev}
                        onClick={ (e) => i18n.changeLanguage(e.target.value) }
                        value={option.abrev}
                    >
                        {option.language}
                    </button>
                ))
            }
        </div>
    )
}
