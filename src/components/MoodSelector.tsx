
import React from 'react';

interface MoodSelectorProps {
  value: string;
  onChange: (mood: string) => void;
}

const moods = [
  { id: 'great', label: 'Great', emoji: '😊', color: 'mood-great' },
  { id: 'good', label: 'Good', emoji: '🙂', color: 'mood-good' },
  { id: 'okay', label: 'Okay', emoji: '😐', color: 'mood-okay' },
  { id: 'low', label: 'Low', emoji: '😔', color: 'mood-low' },
  { id: 'difficult', label: 'Difficult', emoji: '😢', color: 'mood-difficult' },
];

export const MoodSelector: React.FC<MoodSelectorProps> = ({ value, onChange }) => {
  return (
    <div className="space-y-3">
      <label className="text-sm font-medium text-gray-700">
        How would you describe your mood right now?
      </label>
      <div className="flex flex-wrap gap-2">
        {moods.map((mood) => (
          <button
            key={mood.id}
            onClick={() => onChange(mood.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              value === mood.id
                ? `bg-${mood.color} text-white shadow-md scale-105`
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <span className="text-lg">{mood.emoji}</span>
            <span>{mood.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
