import { call, put, takeLatest } from 'redux-saga/effects';
import {
  FETCH_PRODUCT_REQUEST,
  fetchProductSuccess,
  fetchProductFailure,
} from './actions';

function* fetchUsers() {
  try {
    const response = yield call(fetch, 'https://dummyjson.com/products?limit=10&skip=0');
    const data = yield response.json();
    yield put(fetchProductSuccess(data));
  } catch (error) {
    yield put(fetchProductFailure(error));
  }
}

function* userSaga() {
  yield takeLatest(FETCH_PRODUCT_REQUEST, fetchUsers);
}

export default userSaga;