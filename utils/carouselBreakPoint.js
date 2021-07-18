const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 891 },
    items: 3,
  },
  tablet: {
    breakpoint: { max:891, min: 597 },
    items: 2,
    slidesToSlide: 2,
    partialVisibilityGutter: 10
  },
  mobile: {
    breakpoint: { max: 597, min: 0 },
    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter: 80
  }
}

export default responsive