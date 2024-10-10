import React , { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Zoom } from 'react-awesome-reveal';
import investmentImg1 from '../../Imgs/service-details-01.jpg'
import investmentImg2 from '../../Imgs/service-details-02.jpg'
import investmentImg3 from '../../Imgs/service-details-03.jpg'

const Investment = () => {


    const [activeTable, setActiveTable] = useState("Crypto Investments");

    const handleClick = (tab) => {
        setActiveTable(tab)
    }

    const tabs = {
        "Crypto Investments": [
            [
                <img src={investmentImg1} alt='service-details'/>,
                'Learn more about cryptocurrency investments',
                'Fusce fringilla nisl nunc, nec rutrum lectus cursus nec. In blandit nibh dolor, at rutrum leo accumsan porta. Nullam pulvinar eros porttitor risus condimentum tempus.',
                '- Top Crypto prices and charts',
                '- Top Crypto prices and charts',
                '- Top Crypto prices and charts',
            ]
        ],

        "Cryptocurrency Market": [
            [
                <img src={investmentImg2} alt='service-details'/>,
                'Read more on Cryptocurrency Market',
                'Fusce fringilla nisl nunc, nec rutrum lectus cursus nec. In blandit nibh dolor, at rutrum leo accumsan porta. Nullam pulvinar eros porttitor risus condimentum tempus.',
                '- Top Crypto prices and charts',
                '- Top Crypto prices and charts',
                '- Top Crypto prices and charts',
            ]
        ],

        "Financial Planning": [
            [
                <img src={investmentImg3} alt='service-details'/>,
                'How to carefully plan on your online financials',
                'Etiam id ligula risus. Fusce fringilla nisl nunc, nec rutrum lectus cursus nec. In blandit nibh dolor, at rutrum leo accumsan porta. Nullam pulvinar eros porttitor risus condimentum tempus.',
                '- Top Crypto prices and charts',
                '- Top Crypto prices and charts',
                '- Top Crypto prices and charts',
            ]
        ],
    }

  return (
    <div className='investment-services'>
      <Container>
        <div className='title'>
          <h5>Investment in Details</h5>
          <h1>Upgrade your knowledge</h1>
        </div>

        <div className='content'>
                    <div className='left'>
                        <div className='tabs'>
                            {Object.keys(tabs).map((tab)=>(
                                <button key={tab} onClick={()=> handleClick(tab)} className={activeTable === tab? "active": ""}>
                                    {tab}
                                </button>
                            ))}
                        </div>
                        <Zoom key={activeTable}>
                                    {tabs[activeTable].map(
                                        ([img, title, decs, span1, span2, span3], index)=> (
                                            <div className='box' key={index}>
                                                <div className='image'>
                                                    {img}
                                                </div>
                                                <div className='right-content'>
                                                    <h4> {title} </h4>
                                                    <p> {decs} </p>
                                                    <span> {span1} </span>
                                                    <span> {span2} </span>
                                                    <span className='last-span'> {span3} </span>
                                                </div>
                                            </div>
                                        )
                                    ) }
                        </Zoom>
                    </div>
        </div>
      </Container>
    </div>
  )
}

export default Investment
