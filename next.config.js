/** @type {import('next').NextConfig} */
const nextConfig = {
  exportTrailingSlash: true,
  exportPathMap: function(){
    return {
      "/": {page: "/"}
    }
  }
}

module.exports = nextConfig
