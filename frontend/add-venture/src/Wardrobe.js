import { useState } from 'react';

let nextId = 0;

export default function WardrobeList() {
    const [wardrobe, setWardrobe] = useState([])

    const [popUpMenu, setPopUpMenu] = useState(false);

    let alphaJacket = 'Alpha Jacket'
    let alphaJacketImg = 'https://s3-alpha-sig.figma.com/img/e527/47c0/7437520f017ef17f443c7e0a2de2980e?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XAfiQ9Czn5GPjbbpGgFjfg9odsCQLK6agp8EBy-jtkwQcfD01TnkmLTbJAnroq2FcnhyYB~9~LZ-06S2sFmWg5Af8uJUlLTPE0LLT1vJOwkTzCsgNtbCHnZr2IwmHyYnNGATTTWz~aGs1-V-1MvQZ1BzYw11lfhitUpfi0G5W-S6WqVDk4dkek2niptc-Y0WBtbsekqp7qrBAF~mhW52pQCk6luCVZ1PpIeEOEbAJzElqBiHSL3hUrCLVSlb0h8M7aNfw9AEpxTO52m3Osb1YDmyf6YovwLOr~0bdi2b57rwYsZdyP1eWJjcZehLyrQnScbZjXqUk0rHAaeZVWN8rA__'
    let betaLT = 'Beta LT Jacket'
    let betaLTImg = 'https://s3-alpha-sig.figma.com/img/34a7/ba39/12eeb352a7dce6833e3be703d5d9450e?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hydWRu~yzyb0T8vTRS~mzcvcTQHyzOu4ZEuoqtcwTdgcyZZ5VU6TWmac85sSMoRNsTGXAV3ba4Nz-P2VEI2OV0S0rWXhyarpotv5y4ZLymX3YVAqhVILAGkruugRUGCohmTkkoMr~xR4zW32npEyOdYjsgL-KtIc7ndNnphX7ZWp5sXx6md~FN95buRpGRC6Ko5JCBgrcPoKIcwCaCXncRSoofv9ax-ANQknIOlLmM3shlUu~HF3zNvTb8rugrY0SAXfELHrqQkmNQWC0YUDHV-xMdK~K2P0qk31Yl5lQucs2DAdb82M1datNTVdwwm0d43B1oPMXjaeTZXU5t-ofQ__'
    let morozShell = 'Moroz Shell'
    let morozShellImg = 'https://s3-alpha-sig.figma.com/img/3802/4f89/95ae6963cabfeaf9825065c239a04e71?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YqqIY3xG~68BAt4XlK-LDOgBjuvWM2DbXY3Lb0K6hCgnCFnYL6AiL5qLhn9lUoppdh~r2m16Ng~5cDnu-J2XU0LHBN~bkuwvzrN9G6d9CuE9h5V5mgUOb05NvbAnVLARel3nbGQ8ibYLqpLkWPcEr0Av7ncW9vyX~JROTpO1H4NW8n-fpXLeaXS7zPNYrXq8pvNnV-hnakFSg8pNXzHQzyf2dgOAum0ruJtWvv-CVld5-3a1nSxFq4lMWEuWBdB~4fYFW5ZLLbLGQpiLYcryaf6gMakY7fiR5iUo2EuT72kOiC4Z8ht1t0W3lT52iSzoD4tGTdwNz2xPDR-AdRCFLA__'
    let katinHoody = 'Katin Hoody'
    let katinHoodyImg = 'https://s3-alpha-sig.figma.com/img/8bc8/943e/b925aed390ab4b30d848ea8f9536d83e?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R~QPzTZqWZnr8Mf7cZvSrJONkUGNvVaZRNt9r0JcfOrPUkS2fvt1VKDKOEq1Z93~VyJiDKMqjDn1tgfmv8yoqVl4R1lRXX6jua9SV0PbRAuEQQm1k-ZnU-hlmrqgWkAEX7bLfnE7e4OLDHg5wcCgMx1PHnPO55PdowNxBdeukWmJIGDsYT1Q4bikcm8WkhQGGR1UAr008LUZy7ZnT4Zhl2Zqwoaxv9ZHP5afACCJ6uhZjl-cZKDjApWpEwLa3XYQukBa32zZ2oJNvKaoA0I3ZS4r111ZRw9WV~4u9g1r1s9L-BuqwzaYvdskJVs9tE7mYSwMhHGob2EOMlvVKi9qLw__'

    const clickUpload = (e) => {
        setWardrobe([
            ...wardrobe,
            { id: nextId++, name: e }
        ]);
    }

    function PopUpMenu() {
        return (
            <ul className="drop-down">
                <button className='wardrobe-add' onClick={()=>clickUpload(alphaJacket)}>Add Alpha Jacket to Wardrobe</button>
                <button className='wardrobe-add' onClick={()=>clickUpload(betaLT)}>Add Beta LT to Wardrobe</button>
                <button className='wardrobe-add' onClick={()=>clickUpload(morozShell)}>Add Moroz Shell to Wardrobe</button>
                <button className='wardrobe-add' onClick={()=>clickUpload(katinHoody)}>Add Katin Hoody to Wardrobe</button>
            </ul>
        );
    }

    return (
        <>
            <h1>Wardrobe:</h1>
            <div className="wrapper-wardrobe">
                <div className="container">
                    <img className="wardrobe-img" src={alphaJacketImg} alt="Alpha Jacket"></img>
                    <div className="below">Alpha Jacket</div>
                </div>
                <div className="container">
                    <img className="wardrobe-img" src={betaLTImg} alt="Beta LT"></img>
                    <div className="below">Beta LT</div>
                </div>
                <div className="container">
                    <img className="wardrobe-img" src={morozShellImg} alt="Moroz Shell"></img>
                    <div className="below">Moroz Shell</div>
                </div>
                <div className="container">
                    <img className="wardrobe-img" src={katinHoodyImg} alt="Katin Hoody"></img>
                    <div className="below">Katin Hoody</div>
                </div>
                <button className='wardrobe-add' onClick={() => setPopUpMenu(!popUpMenu)}>
                    + Add Item
                </button>
                {popUpMenu && PopUpMenu()}
            </div>
            <ul>
                {wardrobe.map(activity => (
                    <li key={activity.id}>{activity.name}</li>
                ))}
            </ul>

        </>
    );
}