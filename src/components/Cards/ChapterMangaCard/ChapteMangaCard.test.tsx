import React from 'react';
import ChapterMangaCard from '.';
import { render, fireEvent } from '@testing-library/react-native'

describe('ChapterMangaCard', () => {
    it('renders correctly', () => {
        const { getByText } = render(<ChapterMangaCard title="Test Title" date="Test Date" />);
        expect(getByText('Test Title')).toBeTruthy();
        expect(getByText('Test Date')).toBeTruthy();
    });

    it('triggers onPress callback when pressed', () => {
        const onPressMock = jest.fn();
        const { getByText } = render(<ChapterMangaCard title="Test Title" date="Test Date" onPress={onPressMock} />);
        fireEvent.press(getByText('Test Title'));
        expect(onPressMock).toHaveBeenCalled();
    });
});
