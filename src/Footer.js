function Footer(){
  return(
  <div className="Footer">
    <div className="footerText">

      <table>
        <thead>
          <tr>
            <td>
              <div className="footerBigText">
                Questions? Reach out to us!
              </div>
            </td>
            <td>
              About
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Email us at <b>Hello@getinspectify.com</b>
            </td>
            <td>
              <b><a href="https://public-inspectify.s3.amazonaws.com/documents/Inspectify+-+Terms+of+Use.pdf">Terms of Services</a></b>
            </td>
          </tr>
          <tr>
            <td>
              Or call us at <b>(855) 456-6446</b>
            </td>
            <td>
              <b><a href="https://public-inspectify.s3.amazonaws.com/documents/Inspectify+-+Privacy+Policy.pdf">Privacy Policy</a></b>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default Footer;
