import { useLoaderData } from 'react-router-dom';
import { useSearch } from '../../hooks/useSearch';
import { INews, ISuccess } from '../../services/api/types';
import { NewsHeader } from '../create/components/NewsHeader';
import {
  Button,
  Checkbox,
  DropdownMenu,
  Flex,
  Heading,
  Table,
  Text,
} from '@radix-ui/themes';
import { useState } from 'react';
import { toolbarToggleItemStyle } from '../../pages/blog/style';

const TrustBucketPage = () => {
  const data = useLoaderData() as ISuccess<INews[]>;
  const { searchTerm, setSearchTerm, filteredData } = useSearch<INews>(
    data.data,
    ['newsTitle']
  );
  const [news, setNews] = useState<INews | null>(null);

  // State to track visible columns
  const [visibleColumns, setVisibleColumns] = useState({
    content: true,
    source: true,
    createdAt: true,
  });

  const onClick = (currentNews: INews | null) => {
    setNews(currentNews);
  };

  const handleColumnToggle = (column: keyof typeof visibleColumns) => {
    setVisibleColumns((prev) => ({
      ...prev,
      [column]: !prev[column],
    }));
  };
  

  return news ? (
    <div className="chat-container overflow-y-auto">
      <div className="flex justify-between align-center">
        <div className="p-4 cursor-pointer">
          <Button
            variant="ghost"
            onClick={() => setNews(null)}
            css={toolbarToggleItemStyle(false)}
            className="cursor-pointer"
          >
            ← Back
          </Button>
        </div>

        <div className="m-3">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <button className='btn bg-theme-main/5 p-2 rounded-xl flex items-center content-between gap-2 truncate text-theme-main'>
                Options
                <DropdownMenu.TriggerIcon />
              </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content color="gray" variant="soft">
              <DropdownMenu.Label>Toggle Columns</DropdownMenu.Label>
              <DropdownMenu.Item className='hover:bg-theme-main/5 hover:text-theme-main text-theme-accent'>
                <Checkbox
                  className='text-theme-main'
                  checked={visibleColumns.content}
                  onCheckedChange={() => handleColumnToggle('content')}
                />
                  Content
              </DropdownMenu.Item>
              <DropdownMenu.Item className='hover:bg-theme-main/5 hover:text-theme-main text-theme-accent'>
                <Checkbox
                  className='text-theme-main'
                  checked={visibleColumns.source}
                  onCheckedChange={() => handleColumnToggle('source')}
                />
                  Source
              </DropdownMenu.Item>
              <DropdownMenu.Item className='hover:bg-theme-main/5 hover:text-theme-main text-theme-accent'>
                <Checkbox
                  className='text-theme-main'
                  checked={visibleColumns.createdAt}
                  onCheckedChange={() => handleColumnToggle('createdAt')}
                />
                  Created At
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
      </div>

      <div className='overflow-y-auto m-2 p-2'>
        <Table.Root>
          <Table.Header>
            <Table.Row>
              {visibleColumns.content && (
                <Table.ColumnHeaderCell>Content</Table.ColumnHeaderCell>
              )}
              {visibleColumns.source && (
                <Table.ColumnHeaderCell>Source</Table.ColumnHeaderCell>
              )}
              {visibleColumns.createdAt && (
                <Table.ColumnHeaderCell>Created At</Table.ColumnHeaderCell>
              )}
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {news.refer.map((refer) => (
              <Table.Row key={refer.createdAt}>
                {visibleColumns.content && (
                  <Table.Cell>{refer.content}</Table.Cell>
                )}
                {visibleColumns.source && <Table.Cell width="200px"><a href={refer.source} target="_blank" rel="noreferrer" className='text-primary underline'>Go To Source URL</a></Table.Cell>}
                {visibleColumns.createdAt && (
                  <Table.Cell width="200px">
                    {new Intl.DateTimeFormat('en-US', {
                      weekday: 'short', // "Tue"
                      month: 'short',   // "Dec"
                      day: 'numeric',   // "3"
                      year: 'numeric',  // "2024"
                      hour: 'numeric',  // "4"
                      minute: '2-digit', // "33"
                      hour12: true      // "PM"
                    }).format(new Date(refer.createdAt))}
                  </Table.Cell>
                )}
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </div>
    </div>
  ) : (
    <div className="p-6 space-y-6 ">
      <NewsHeader searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredData?.map((currentNews) => (
          <div
            key={currentNews._id}
            className="rounded-lg hover:shadow-main shadow-main group relative flex-1 w-full h-36 box-border p-4 bg-white shadow-slate-300 overflow-hidden cursor-pointer"
            onClick={() => onClick(currentNews)}
          >
            <div className="mb-2 h-full w-full">
              <Flex direction="column">
                <Heading
                  mb="2"
                  size="4"
                  className="capitalize !font-normal text-theme-main truncate line-clamp-1"
                >
                  {currentNews.newsTitle}
                </Heading>
                <Text size="2" className="block text-sm text-theme-accent">
                  {currentNews.brandId.title}
                </Text>
                <Text size="2" className="block text-sm text-theme-accent">
                  {currentNews.readerId.title}
                </Text>
                <Text size="2" className="block text-sm text-theme-accent">
                  {currentNews.categoryId.title}
                </Text>
              </Flex>

              <div className="flex items-center justify-between">
                <Text className="text-xs text-gray-400">
                  {new Intl.DateTimeFormat('en-US', {
                    month: 'numeric',
                    day: 'numeric',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true,
                  }).format(new Date(currentNews.updatedAt!))}
                </Text>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBucketPage;
