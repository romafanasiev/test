import {
  CardBody,
  CardHeader,
  Heading,
  Text,
  Card,
  CardProps,
} from '@chakra-ui/react';

import type { CardType } from '@/app/types';

export const CardItem = ({
  title,
  description,
  content,
  ...rest
}: CardType & CardProps) => {
  return (
    <Card {...rest}>
      <CardHeader>
        <Heading size="md" as="h2">
          {title}
        </Heading>
      </CardHeader>

      <CardBody>
        <Heading size="xs" textTransform="uppercase" as="h3">
          {description}
        </Heading>

        <Text pt="2" fontSize="sm">
          {content}
        </Text>
      </CardBody>
    </Card>
  );
};

