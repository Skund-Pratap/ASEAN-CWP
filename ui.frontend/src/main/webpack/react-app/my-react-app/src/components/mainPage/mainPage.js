import React from 'react';
import Container from './container';

const MainPage = () => {
  const jsonData = {
    container: {
      gridClassNames: 'aem-Grid aem-Grid--12 aem-Grid--default--12',
      columnCount: 12,
      columnClassNames: {
        title: 'aem-GridColumn aem-GridColumn--default--10 aem-GridColumn--offset--default--1 aem-GridColumn--default--none',
        list: 'aem-GridColumn aem-GridColumn--default--10 aem-GridColumn--offset--default--1 aem-GridColumn--default--none',
        teaser: 'aem-GridColumn aem-GridColumn--default--10 aem-GridColumn--offset--default--1 aem-GridColumn--default--none',
      },
      allowedComponents: { applicable: false, components: [] },
      ':items': {
        teaser: {
          id: 'teaser-b52569669d',
          title: 'ATTEND EVERY SHOW',
          description: "<p>If you can't fly to Brazil tomorrow night to see your favorite DJ play an epic show, no worries! DJ's and artists across the globe now offer the ability to stream their show LIVE.</p>\r\n",
          titleType: 'h3',
          actionsEnabled: false,
          imageLinkHidden: false,
          titleLinkHidden: true,
          actions: [],
          imagePath: '/content/wknd-muzik/language-masters/en/home-page/_jcr_content/root/container/container/teaser.coreimg.png/1685626905323/adobestock--6.png',
          ':type': 'wknd-muzik/components/teaser',
          dataLayer: {
            'teaser-b52569669d': {
              '@type': 'wknd-muzik/components/teaser',
              'dc:description': "<p>If you can't fly to Brazil tomorrow night to see your favorite DJ play an epic show, no worries! DJ's and artists across the globe now offer the ability to stream their show LIVE.</p>\r\n",
              'dc:title': 'ATTEND EVERY SHOW',
              'repo:modifyDate': '2020-10-07T17:06:29Z',
            },
          },
        },
        title: {
          id: 'title-08da3399bb',
          linkDisabled: false,
          type: 'h2',
          text: 'ALL MUSICIAN TYPES',
          ':type': 'wknd-muzik/components/title',
          dataLayer: {
            'title-08da3399bb': {
              '@type': 'wknd-muzik/components/title',
              'dc:title': 'ALL MUSICIAN TYPES',
              'repo:modifyDate': '2020-10-13T01:35:53Z',
            },
          },
        },
        list: {
          id: 'list-e09347fb1b',
          dateFormatString: 'yyyy-MM-dd',
          items: [
            {
              id: 'list-e09347fb1b-item-6e801cf36f',
              path: '/content/wknd-muzik/language-masters/en/home-page/shows/bands',
              lastModified: 1602151018732,
              url: '/content/wknd-muzik/language-masters/en/home-page/shows/bands.html',
              description: 'See your favorite bands take stage. We stream 52,724 band shows per year.',
              title: 'Bands',
              dataLayer: {
                'list-e09347fb1b-item-6e801cf36f': {
                  '@type': 'wknd-muzik/components/page',
                  'dc:title': 'Bands',
                  'xdm:linkURL': '/content/wknd-muzik/language-masters/en/home-page/shows/bands.html',
                  'repo:modifyDate': '2023-05-16T07:21:32Z',
                },
              },
              ':type': 'wknd-muzik/components/page',
            },
            {
              id: 'list-e09347fb1b-item-7744554124',
              path: '/content/wknd-muzik/language-masters/en/home-page/shows/djs',
              lastModified: 1602866610161,
              url: '/content/wknd-muzik/language-masters/en/home-page/shows/djs.html',
              description: "See your favorite DJ's take stage. We stream 112,724 DJ shows per year.",
              title: 'World Class DJs',
              dataLayer: {
                'list-e09347fb1b-item-7744554124': {
                  '@type': 'wknd-muzik/components/page',
                  'dc:title': 'World Class DJs',
                  'xdm:linkURL': '/content/wknd-muzik/language-masters/en/home-page/shows/djs.html',
                  'repo:modifyDate': '2023-05-16T07:21:32Z',
                },
              },
              ':type': 'wknd-muzik/components/page',
            },
            {
              id: 'list-e09347fb1b-item-7744554124',
              path: '/content/wknd-muzik/language-masters/en/home-page/shows/djs',
              lastModified: 1602866610161,
              url: '/content/wknd-muzik/language-masters/en/home-page/shows/djs.html',
              description: "See your favorite DJ's take stage. We stream 112,724 DJ shows per year.",
              title: 'World Class DJs',
              dataLayer: {
                'list-e09347fb1b-item-7744554124': {
                  '@type': 'wknd-muzik/components/page',
                  'dc:title': 'World Class DJs',
                  'xdm:linkURL': '/content/wknd-muzik/language-masters/en/home-page/shows/djs.html',
                  'repo:modifyDate': '2023-05-16T07:21:32Z',
                },
              },
              ':type': 'wknd-muzik/components/page',
            },
            {
              id: 'list-e09347fb1b-item-bd6302f356',
              path: '/content/wknd-muzik/language-masters/en/home-page/shows/solo-artists',
              lastModified: 1602151079301,
              url: '/content/wknd-muzik/language-masters/en/home-page/shows/solo-artists.html',
              description: 'See your favorite solo artists take stage. We stream 92,724 solo artist shows per year.',
              title: 'Solo Artists',
              dataLayer: {
                'list-e09347fb1b-item-bd6302f356': {
                  '@type': 'wknd-muzik/components/page',
                  'dc:title': 'Solo Artists',
                  'xdm:linkURL': '/content/wknd-muzik/language-masters/en/home-page/shows/solo-artists.html',
                  'repo:modifyDate': '2023-05-16T07:21:32Z',
                },
              },
              ':type': 'wknd-muzik/components/page',
            },
          ],
          showDescription: true,
          showModificationDate: false,
          linkItems: false,
          ':type': 'wknd-muzik/components/list',
          dataLayer: {
            'list-e09347fb1b': {
              '@type': 'wknd-muzik/components/list',
              'repo:modifyDate': '2020-10-08T10:00:03Z',
            },
          },
        },
      },
      ':itemsOrder': ['teaser', 'title', 'list'],
      ':type': 'wknd-muzik/components/container',
    },
  };

  const { container } = jsonData;
  const { ':itemsOrder': itemsOrder, ':items': items } = container;

  return (
    <div>
      <Container itemsOrder={itemsOrder} items={items} />
    </div>
  );
};

export default MainPage;