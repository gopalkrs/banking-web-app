'use client';
import { formatAmount } from '@/lib/utils';
import React from 'react'
import CountUp from 'react-countup'

const AnimatedCounter = ({ amount }: {amount : number}) => {
  return (
    <div className='w-full'>
        <CountUp 
            duration={2.75}
            decimal='.'
            decimals={2}
            end={amount}
            prefix='&#8377; '
        />
    </div>
  )
}

export default AnimatedCounter