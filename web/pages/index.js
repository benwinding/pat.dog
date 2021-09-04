import React from 'react';

export default function Page() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="text-center hero-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Pat Dog
          </h1>
          <p>A Jaana Bithell and <a href="https://benwinding.com">Ben Winding</a> project</p>
        </div>
      </div>
    </div>
  )
}

Page.isPublic = true;
