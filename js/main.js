/* Sell Car Dubai Guide - Main JavaScript
   Functionality: Hamburger menu, TOC toggle, smooth scrolling
*/

document.addEventListener('DOMContentLoaded', function() {
  // Hamburger Menu Toggle
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('nav');
  
  if (hamburger) {
    hamburger.addEventListener('click', function() {
      nav.classList.toggle('active');
    });
    
    // Close menu when a link is clicked
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        nav.classList.remove('active');
      });
    });
  }
  
  // Table of Contents Toggle (Mobile)
  const tocToggle = document.querySelector('.toc-toggle');
  const tocContent = document.querySelector('.toc-content');
  
  if (tocToggle && tocContent) {
    tocToggle.addEventListener('click', function() {
      tocContent.classList.toggle('active');
      tocToggle.textContent = tocContent.classList.contains('active') ? 'Hide Contents' : 'Show Contents';
    });
  }
  
  // Set active nav link based on current page
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '/' && href === '/')) {
      link.classList.add('active');
    }
  });
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
});
