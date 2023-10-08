import React, { useRef } from 'react'
import './Adv.css'
import a from './a.png'
import b from './b.png'
import c from './c.png'
import d from './d.png'
import e from './e.png'
import f from './f.png'
import g from './g.png'
import h from './h.png'

const Adv = () => {
    const advRef = useRef(null);
    const moveToRight = () => {
        if (advRef.current) {
            advRef.current.scrollLeft += 200;
        }
    };
    const moveToLeft = () => {
        if (advRef.current) {
            advRef.current.scrollLeft -= 200;
        }
    }
    return (<div className='AdvParentDiv row'>
        <div className="startBtn col-2 col-md-2 col-lg-1">
            <button onClick={moveToLeft}>&lt;</button>
        </div>

        <ul id='advList' className=' col-8 col-md-8 col-lg-10' ref={advRef}>
            <li><img className='advImg' src={b} alt="" /></li>
            <li><img className='advImg' src={a} alt="" /></li>
            <li><img className='advImg' src={c} alt="" /></li>
            <li><img className='advImg' src={d} alt="" /></li>
            <li><img className='advImg' src={e} alt="" /></li>
            <li><img className='advImg' src={f} alt="" /></li>
            <li><img className='advImg' src={g} alt="" /></li>
            <li><img className='advImg' src={h} alt="" /></li>
            <li><img className='advImg' src={b} alt="" /></li>
            <li><img className='advImg' src={a} alt="" /></li>
            <li><img className='advImg' src={c} alt="" /></li>
            <li><img className='advImg' src={d} alt="" /></li>
            <li><img className='advImg' src={e} alt="" /></li>
            <li><img className='advImg' src={f} alt="" /></li>
            <li><img className='advImg' src={g} alt="" /></li>
            <li><img className='advImg' src={h} alt="" /></li>
        </ul>
        <div className="endBtn col-2 col-md-2 col-lg-1">
            <button onClick={moveToRight}>&gt;</button>
        </div>

    </div>
    )
}

export default Adv