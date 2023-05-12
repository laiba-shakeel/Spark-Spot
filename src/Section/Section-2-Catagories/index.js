import React from 'react'
import baseColors from '../../Constant/color'

function SectionTwoCategories() {
  return (
    <div className='row container d-flex align-items-center justify-content-center py-3 my-2' style={{borderBottom:"1px solid", borderColor:baseColors.lightGrey}}>

        <div className='col-12 col-md-3 col-xl-2 d-flex justify-content-center' style={{fontSize:"22px", fontWeight:"600", color:baseColors.lightGrey}} >
        Trusted by
        </div>
        <div className='col-4 col-xl-2 d-block d-md-none d-xl-block text-center d-flex justify-content-center' >
        <img src="https://assets-global.website-files.com/603fea6471d9d8559d077603/606ad171bd184644e7f53d6c_Microsoft.svg" />
        </div>
        <div className='col-4 col-md-2 col-xl-2 d-flex justify-content-center' >
        <img src="https://assets-global.website-files.com/603fea6471d9d8559d077603/606ad17043ba40d94531ff42_Airbnb.svg" />
        </div>
        <div className='col-4 col-md-3 col-xl-2 d-flex justify-content-center' >
        <img src="https://assets-global.website-files.com/603fea6471d9d8559d077603/606ad171e5289d3760cfac09_logo-automatic.svg" />
        </div>
        <div className='col-6 col-md-1 col-xl-2 d-flex justify-content-center' >
        <img src="https://assets-global.website-files.com/603fea6471d9d8559d077603/606ad17089ad7f5f01b74d27_Bissell.svg" />
        </div>
        <div className='col-6 col-md-3 col-xl-2 d-flex justify-content-center' >
        <img src="https://assets-global.website-files.com/603fea6471d9d8559d077603/60c6f358639e8cc66cee6e64_NASDAQ_Logo.svg" />
        </div>

    </div>
  )
}

export default SectionTwoCategories