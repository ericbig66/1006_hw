// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line no-unused-vars
const CategoryTitle = ({ text }) => <strong className="d-inline-block mb-2 text-primary">{text}</strong>
// eslint-disable-next-line no-unused-vars
const MainTitle = ({ text }) => <h3 className="mb-0">{text}</h3>
// eslint-disable-next-line no-unused-vars
const UpdateTime = ({ text }) => <div className="mb-2 text-muted">{text}</div>
// eslint-disable-next-line no-unused-vars
const CardContent = ({ text }) => <p className='card-text mb-auto'>{text}</p>
// eslint-disable-next-line no-unused-vars
const HyperLink = ({ text, link }) => <a href={link} className='stretched-link'>{text}</a>

// eslint-disable-next-line no-unused-vars
const EventCard = () => {
  return (
    <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
      <div className="col p-4 d-flex flex-column position-static">
        <CategoryTitle text={'最讚案件'}/>
        <MainTitle text={'資管系作業三'}/>
        <UpdateTime text={'3月31日'}/>
        <CardContent text={'這是一個能夠在本機環境開發的前端網站，使用jsx在react環境下開發的快速開發環境'}/>
        <HyperLink link={'#'} text={'繼續閱讀...'}/>   </div>
      <div className="col-auto d-none d-lg-block">
        <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
      </div>
    </div>
  )
}

export default EventCard
