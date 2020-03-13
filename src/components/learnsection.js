import React from 'react';

function Card(props){
  return(
    <div className='w5 h5' style={{margin:'0 auto', background: 'linear-gradient(to bottom, skyblue, purple, violet, pink)'}}></div>
    //{props.cardTitle} for specific Card titles
  )
}

function CardList(props){
  return props.cards.map((card) => <div className='w-30 ma1'><Card /></div>) 
}

const LearnSection = ({title, cards}) => (
    <section className='learnSection'>

      <h1 className='learnHeader tc mt3'>{title}</h1>

        <div className='flex flex-wrap justify-around'>
          <CardList cards={cards} />
        </div>
      
      </section>
)

export default LearnSection;