import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { CardItem } from '../../../src/app/components/client/CardsList/components/CardItem';

const testData = {
  title: 'test title',
  description: 'test description',
  content: 'test content',
};

describe('CardItem unit tests', () => {
  it('renders a card item component', () => {
    render(
      <CardItem
        title={testData.title}
        description={testData.description}
        content={testData.content}
      />
    );

    const heading = screen.getByText(testData.title, { selector: 'h2' });
    const subHeading = screen.getByText(testData.description, {
      selector: 'h3',
    });
    const content = screen.getByText(testData.content, { selector: 'p' });

    expect(heading).toBeInTheDocument();
    expect(subHeading).toBeInTheDocument();
    expect(content).toBeInTheDocument();
  });
});

