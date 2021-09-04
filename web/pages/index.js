import React from 'react';

export default function Page() {
  const [cursorClass, setCursorClass] = React.useState('cursor-pat');

  return (
    <div className={"min-h-screen w-full flex flex-col " + cursorClass}>
      <div className="w-full flex-0 bg-red-100 p-2">
        <h1>Pat.dog</h1>
        <p>By Jaana Bithell and Ben Winding</p>
      </div>
      <div className="w-full flex-1 bg-green-100 flex flex-row justify-around">
        <div className="flex-1 flex flex-row justify-around">
          <div className="flex flex-col justify-around">
            Dog Being Patted Goes Here
          </div>
        </div>
      </div>
      <div className="w-full flex-0 bg-red-100 p-2">
        <Buttons onCursorChanged={setCursorClass} />
      </div>
    </div>
  )
}

Page.isPublic = true;

function Buttons({ onCursorChanged }) {
  const buttons = [
    {
      label: 'Pat',
      cursorClass: 'cursor-pat'
    },
    {
      label: 'Scratch',
      cursorClass: 'cursor-scratch'
    },
  ]

  const onClickedButton = (b, i) => {
    onCursorChanged(b.cursorClass);
  }
  return <div className="flex gap-2">
    <div className="flex-1"></div>
    <div className="flex-0 flex flex-col gap-2">
      <h1>Pat Type</h1>
      {
        buttons.map((b, i) => <button key={i} onClick={() => onClickedButton(b, i)} className="btn btn-primary">{b.label}</button>)
      }
    </div>
  </div>
}
