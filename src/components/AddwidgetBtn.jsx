import React from "react";

function AddwidgetBtn({ right, handleClick }) {
  return (
    <button
      onClick={handleClick}
      className="px-2 py-1 rounded border hover:bg-slate-100 border-zinc-700 text-xs transition-all text-center flex justify-center items-center "
    >
      {right ? (
        <>
          <span className="text-xl mr-2 text-slate-700">+</span> Add Widget
        </>
      ) : (
        <>
          Add Widget <span className="text-xl ml-2 text-slate-700">+</span>
        </>
      )}
    </button>
  );
}

export default AddwidgetBtn;
