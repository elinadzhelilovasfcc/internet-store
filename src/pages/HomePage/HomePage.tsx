import React from 'react'
import ButtonCustom from 'shared/ui/Button';

interface IHomePage {
}

const HomePage: React.FC<IHomePage> = ({
}) => {
  return (
    <div>
        <ButtonCustom
            id='home-page-button'
            text='Home Page'
            className='btn'
            color='primary'
            classNameOnHover='btn-hover'
            size='md'
            auto={true}
            animated={true}
            weights='extrabold'
            onClick={function (): void {
              console.log('clicked')
          } }/>
    </div>
  )
}

export default HomePage;