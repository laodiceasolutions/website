'use client';

import useApplication from "../hooks/useApplication";

export default function BlogHeader(props) {
  const { title, publishDate = new Date(), readTime } = props;
  const { language } = useApplication();
  return (
    <header className="mb-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        {title}
      </h1>
      <div className="flex items-center space-x-4 text-gray-600">
        <span>{language === 'tr' ? `${publishDate.toLocaleString('tr-TR', {dateStyle: 'medium'})} tarihinde yayınlandı` : `Published on ${publishDate.toLocaleString('en-US', {dateStyle: 'medium'})}`}</span>
        <span>•</span>
        <span>{language === 'tr' ? `Okuma süresi ${readTime} dakika` : `${readTime} min read`}</span>
      </div>
    </header>
  )
}