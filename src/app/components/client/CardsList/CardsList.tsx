'use client';
import { useMainStore } from '@/app/providers/store-provider';
import { CardItem } from './components/CardItem';
import { Stack } from '@chakra-ui/react';

export const CardsList = () => {
  const { cards } = useMainStore((state) => state);
  return (
    <Stack as="ul" className="list-none" direction="column" gap={4}>
      {cards.length > 0 ? (
        cards.map(({ description, title, content }, index) => (
          <li key={index}>
            <CardItem
              size="lg"
              minWidth={320}
              description={description}
              title={title}
              content={content}
            />
          </li>
        ))
      ) : (
        <li>No items found</li>
      )}
    </Stack>
  );
};

