import React from 'react';

class Container extends React.Component {
  componentDidMount(){
    document.title = "About ARJF.co.uk"
  }

  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1>About Me</h1>
        </div>
        <div className="row container">
          <p>I have been developing website's since the dot-com boom that occurred towards the end of the last millennium
            whilst I was at college. Admittedly, it was only bog standard HTML that featured tables, animated gif's,
            applet's & marquees but nevertheless I found an enthusiasm as it was creative and felt that it was
            revolutionary.</p>
          <p>This lead me to enroll in a University Course which specialised in the World Wide Web during which I found a
            passion for web application programming. First came Java Applets/Servlets, then Perl and finally self taught
            myself PHP via a book. In all honesty, all my learning has come through self taught as I found this was the
            quickest way to gain the basic knowledge.</p>
          <p>After I gained my degree, in 2004 I landed a Junior PHP Developer role at a local web agency that specialised
            in E-Commerce website's and even gained exposure to the mobile industry as they sold subscriptions to
            ring-tones
            through WAP services. This was a stepping stone as in 2006 I joined a software house as a PHP developer that
            specialised in developing their own software. My day to duties centered around developing new features,
            maintaining & bug fixing.</p>
          <p>Ever since then I have worked for:</p>
          <ul>
            <li>A job board which I crossed over into Perl/Oracle & iOs application development</li>
            <li>Another software house where I crossed into the realms of PHP5, Zend Framework 1 and commercial iOs
              application development
            </li>
          </ul>
          <p>Which leads to my current role which is focused on developing Restful API's using custom built frameworks
            and private CRM's which have been developed pre November 2013 using YII and ever since, ZendFramework 2.2,
            Doctrine ORM & Twitter Bootstrap front end.</p>
          <p>In my own time, I like to:</p>
          <ul>
            <li>Research technologies</li>
            <li>Solutions to issues that I encounter</li>
            <li>Mobile Application Development</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Container;