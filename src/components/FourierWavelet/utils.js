export const EMPTY_GRAPHS = {
    main: {
        title: 'Спектрограмма разложения',
        src: null,
        minFreq: 10,
        maxFreq: 100,
        stepFreq: 10
    },
    changeable: {
        title: 'Результат обрезания частот (спектрограмма)',
        src: null
    },
    source: {
        title: 'Изначальный сигнал',
        src: null
    },
    target: {
        title: 'Восстановленный сигнал',
        src: null
    }
}

export const validateInput = data => {
    return data.file
        && ['waves', 'csv'].includes(data.file.split('.').pop())
        && data.transformType
        && ['fourier', 'wavelet'].includes(data.transformType);
}

export const parseData = data => {
    const formData = new FormData();
    formData.append('file', data.file);
    formData.append('transformType', data.transformType);
    return formData;
}
