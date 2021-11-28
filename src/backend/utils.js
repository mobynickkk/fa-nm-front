export const showLoading = showLoadingFunc => mode => showLoadingFunc(mode);

export const getSpectrogram = (showLoading, showError) => params => async data => {
    if (!params.chekDataCallback(data)) {
        showError('Неправильно заполнены данные');
        return;
    }
    showLoading(true);
    try {
        const response = await fetch(params.url, {
            method: 'POST',
            headers: params.headers,
            body: params.parseDataCallback ? params.parseDataCallback(data) : JSON.stringify(data),
        });
        showLoading(false);
        if (!response.ok) {
            showError(response.text());
        } else {
            params.onSuccessCallback(await response.json());
        }
    } catch (e) {
        showLoading(false);
        showError(e);
    }
}
