import React from 'react';

const KeyCap = ({ character, backgroundColor }) => {
    const bgColorClass = backgroundColor ? backgroundColor : 'bg-gray-500';

    return (
        <div className={`inline-block p-5 m-1 ${bgColorClass} text-white text-2xl text-center rounded-sm select-none w-28 h-32 flex items-center justify-center`}>
          {character}
        </div>
      );
};

export default KeyCap;