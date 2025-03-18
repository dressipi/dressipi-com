# Dressipi Website Development Guide

This site uses Jekyll with a Siteleaf CMS.

## Development

- Install dependencies: `bundle install`
- Run development server: `bundle exec jekyll serve` (or `bundle exec jekyll serve --incremental`)
- Clean first: `bundle exec jekyll clean && bundle exec jekyll serve` (removes .jekyll-metadata and .sass-cache)

## Hosting and Deployment

The site is served from an S3 bucket ([dressipi-site](https://s3.console.aws.amazon.com/s3/buckets/dressipi-site?region=eu-west-1&tab=objects)). A dressipi.com CNAME points at dressipi-site.s3-website-eu-west-1.amazonaws.com.

The site is deployed via [Siteleaf](https://manage.siteleaf.com/sites/590c512d9be5f540775bc72d/pages) which runs the jekyll build and uploads the new build to S3. Siteleaf deploys from master and is triggered manually via the 'Publish Changes' button in the UI. It's possible to preview changes before deploying (using the 'Generate Preview') button.

Website content can be created and edited via the Siteleaf CMS, but in practice most changes are made to the source files directly.

Some website content is copied directly to the bucket (e.g. video files to /media) to avoid adding large files to the git repo. For the same reason, the bucket also hosts some assets for the demos served by pantheon.

## Code Style Guidelines

Maintain semantic HTML and accessible markup.

- **Markdown**: Use YAML front matter for metadata at top of .markdown files
- **SASS/SCSS**: Follow BEM naming convention for CSS classes (_component.name.scss)
- **Layouts**: Keep layouts in _layouts/ directory, reuse components from _includes/
- **Images**: Store in _uploads/ directory, use responsive image patterns
- **Collections**: Configure in _config.yml, organize content by type (posts, authors, etc.)
- **Front Matter**: Required fields vary by collection type (see _config.yml defaults)
- **Links**: Use relative paths where possible (e.g., `/blog/category/` not full URLs)
- **SEO**: Always include title, description and relevant front matter for SEO tags
