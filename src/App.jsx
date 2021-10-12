import IconApps from './components/icons/IconApps'
import IconSearch from './components/icons/IconSearch'
import IconMicrophone from './components/icons/IconMicrophone'

const AnchorHeader = ({ title }) => (<a className='text-[#5f6368] hover:underline cursor-pointer'>{title}</a>)
const AnchorFooter = ({ title }) => (
  <a className='text-sm p-4 hover:underline cursor-pointer'>{title}</a>
)

const ButtonBlue = ({ title }) => (<button className='bg-[#1a73e8] rounded-[4px] text-white border-transparent border pl-6 pr-6 pt-2 pb-2 hover:bg-[#2b7de9] hover:shadow-md'>{title}</button>)
const ButtonGray = ({ title }) => (<button className='bg-[#f8f9fa] text-[#3c4043] border-transparent border hover:border-gray-200 rounded-[4px] h-9 px-4'>{title}</button>)

function App () {
  const footerData = [
    ['About', 'Advertising', 'Business', 'How Search works'],
    ['Privacity', 'Terms', 'Settings']
  ]

  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      const value = event.target.value
      if (value) {
        const newWindow = window.open(`https://www.google.com/search?q=${value}`, '_blank', 'noopener,noreferrer')
        if (newWindow) {
          newWindow.opener = null
        }
      }
    }
  }

  return (
    <div className='flex flex-col min-w-[490px] min-h-screen'>
      <div className='flex justify-end items-center space-x-4 p-4'>
        <AnchorHeader title='Gmail' />
        <AnchorHeader title='Images' />
        <a className='flex flex-col justify-center items-center w-10 h-10 text-[#5f6368] hover:bg-gray-200 hover:rounded-full cursor-pointer'>
          <IconApps />
        </a>
        <ButtonBlue title='Access' />
      </div>

      <div className='flex flex-col items-center min-h-[92px] max-h-72'>
        <div className='relative max-h-24 h-full mt-auto'>
          <img className='max-h-full max-w-full object-contain object-center' src='https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' alt='logo' />
        </div>
      </div>

      <div className='flex-shrink p-5 max-h-40'>
        <div className='relative pt-2 mx-auto my-0 w-auto max-w-[584px]'>
          <div className='flex justify-between items-center hover:border-gray-200 hover:border-2 border border-gray-[#5f6368] h-[44px] rounded-t-full rounded-b-full'>
            <span className='text-[#9aa0a6] p-4'>
              <IconSearch />
            </span>
            <input onKeyPress={handleSearch} className='outline-none flex-1 w-48' type='text' />
            <span className='p-4'>
              <IconMicrophone />
            </span>
          </div>
          <div className='flex flex-grow flex-shrink-0 justify-center pt-10 space-x-4'>
            <ButtonGray title='Google Search' />
            <ButtonGray title={'I\'m Feeling Lucky'} />
          </div>
        </div>
      </div>

      <div className='block flex-shrink-0 flex-grow' />

      <div className='flex flex-col xl:justify-between justify-evenly bg-[#f2f2f2] text-[#70757a]'>
        <div className='px-8 py-4 border-b border-gray-300'>México</div>
        <div className='px-5 flex flex-wrap xl:justify-between justify-evenly'>
          {footerData.map((row, index) => (
            <div key={index} className='flex flex-wrap xl:justify-between justify-evenly'>
              {row.map((title, idx) => (<AnchorFooter key={idx} title={title} />))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
