import React from 'react'
import Image from 'next/image';

export const Logo = () => {
  return (
    <div>
      <Image src="/logo.png" alt="logo" width="284" height="64" />
    </div>
  )
}
