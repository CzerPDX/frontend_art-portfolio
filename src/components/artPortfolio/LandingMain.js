

const TestLink = () => {
  return (
    <header className="TestLink">
      <p>
        This is <code>v2</code> of portlandredbird.com. 
      </p>
      <a
        className="Current portlandredbird website"
        href="https://portlandredbird.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        The <code>v1</code> version is located here.
      </a>
    </header>
  );
};



const LandingMain = ({ formType }) => {
  return (
    <div className='LandingMain'>
      <TestLink />
    </div>
  )
}

export default LandingMain