export const showLoading = showLoadingFunc => mode => showLoadingFunc(mode);

export const getSpectrogram = (showLoading, showError, showSpectrogram) => async params => {
    if (!params.file || !params.transformType) {
        showError('Неправильно заполнены данные');
        return;
    }
    showLoading(true);
    try {
        const response = await fetch('', {
            body: JSON.stringify(params),
        });
        showLoading(false);
        if (!response.ok) {
            showError(response.text());
        } else {
            showSpectrogram(response.json());
        }
    } catch (e) {
        showLoading(false);
        showError(e);
    }
}
