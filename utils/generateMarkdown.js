// TODO: Create a function that returns a license badge based on which license is passed in ['MIT', 'APACHE', 'GPL']
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license){
    case 'MIT':
      return '[![License](https://img.shields.io/badge/License-MIT-yellow.svg)]';
      break;
    case 'APACHE':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]';
      break;
    case 'GPL':
      return '[![License](https://img.shields.io/badge/License-GPLv3-blue.svg)]';
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license){
    case 'MIT':
      return '[![MIT License](https://opensource.org/licenses/MIT)]';
      break;
    case 'APACHE':
      return '[![APACHE License](https://opensource.org/licenses/Apache-2.0)]';
      break;
    case 'GPL':
      return '[![GPL License]((https://www.gnu.org/licenses/gpl-3.0)]';
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license){
    case 'MIT':
      return 'This application is covered by the MIT license. Please refer to the link below for more details';
      break;
    case 'APACHE':
      return 'This application is covered by the Apached 2.0 license. Please refer to the link below for more details';
      break;
    case 'GPL':
      return 'This application is covered by the GNU GPL v3 license. Please refer to the link below for more details';
      break;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // github license
  return `${renderLicenseBadge(data.license)}
  // github license

  // description
  
  // table of contents
  // * installation
  // * usage
  // * license
  // * contributing
  // * tests
  // * questions
  
  // questions
  // add email and github
`;
}

module.exports = generateMarkdown;


