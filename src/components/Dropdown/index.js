import React from 'react';
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/md'

import './style.css'

const dropdownData = [
    {
        id: 1,
        header: 'How long does it take to see improvement',
        content: `One common question we receive is, "How long does it take to see improvement?"
        The answer to this question varies based on a number of factors such as the
        severity of your stutter, your level of commitment to practicing the 
        techniques provided, and how often you use the techniques.`,
        show: false
    },
    {
        id: 2,
        header: 'Would I be able to cure my stuttering?',
        content: `Stuttering is a complex communication disorder that can be caused 
        by a variety of factors, including genetics, neurological differences, and environmental
         influences.`,
         show: false
    },
    {
        id: 3,
        header: 'How much time will it take for it to work?',
        content: `Unfortunately, there is no one-size-fits-all answer to this question. 
        The length of time it takes for stuttering treatment to work can vary depending on 
        several factors, including the severity of the stutter, the underlying causes of 
        the stutter, and the individual's willingness and ability to participate in treatment.`,
        show: false
    },
    {
        id: 4,
        header: `I don't stutter alone. So how do I practice?`,
        content: `If you're someone who stutters, you may find it challenging to practice 
        your speech outside of therapy sessions or other structured environments. 
        One of the biggest hurdles can be finding a safe and supportive space in which 
        to practice speaking.`,
        show: false
    },
]

const Dropdown = () => {
    const [ show, setShow ] = React.useState(false);
    const [el, setEl] = React.useState(dropdownData);

    const selectEl = (id, index) => {
        const clickedElement = {...el[index]}
        clickedElement.show ? clickedElement.show = false : clickedElement.show = true;

        el[index] = clickedElement;
        setEl(el);
        setShow(el[index].show)
    }

    return (
        <div className='container'>
            <h1>Got Questions?</h1>

            {
                el.map((data, index) => (
                    <div className='dropdown_container' key={data.id}>
                        <div>
                            <h2>{data.header}</h2>
                            {
                                data.show === false
                                ? <MdKeyboardArrowDown size={35} className={'icon'} onClick={() => selectEl(data.id, index)} /> 
                                : <MdKeyboardArrowUp size={35} className={'icon'} onClick={() => selectEl(data.id, index)} />
                            }
                        </div>
                        { data.show && (
                            <p>{data.content}</p>
                        )}
                    </div>
                ))
            }
        </div>
    )
}

export default Dropdown