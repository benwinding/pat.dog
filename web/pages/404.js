import React from 'react';

export default function Page() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="text-center hero-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-8xl font-bold">
            404 Error
          </h1>
          <a href="/"><h1 className="mb-5 text-5xl font-bold">
            Pat Dog
          </h1></a>
        </div>
      </div>
    </div>
  )
}

Page.isPublic = true;
