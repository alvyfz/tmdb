import axios from 'axios'
import { trendingParams } from '../types/api'

const baseUrl = 'https://api.themoviedb.org/3'
const apiKey = '2fccde01a371b106b09a241d6d1d5b49'

export function getTrendingDay({ page }: trendingParams) {
  return axios({
    method: 'get',
    url: `${baseUrl}/trending/all/day`,
    params: {
      api_key: apiKey,
      page: page,
      language: 'en-US',
    },
  })
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      throw error
    })
}

export function getPopular({ page, type }: trendingParams) {
  return axios({
    method: 'get',
    url: `${baseUrl}/${type}/popular`,
    params: {
      api_key: apiKey,
      page: page,
      language: 'en-US',
    },
  })
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      throw error
    })
}

export function getSearchMulti({ page, search }: trendingParams) {
  return axios({
    method: 'get',
    url: `${baseUrl}/search/multi`,
    params: {
      api_key: apiKey,
      page: page,
      language: 'en-US',
      query: search,
    },
  })
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      throw error
    })
}

export function getTopRated({ page, type }: trendingParams) {
  return axios({
    method: 'get',
    url: `${baseUrl}/${type}/top_rated`,
    params: {
      api_key: apiKey,
      page: page,
      language: 'en-US',
    },
  })
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      throw error
    })
}

export function getTrendingWeek({ page }: trendingParams) {
  return axios({
    method: 'get',
    url: `${baseUrl}/trending/all/week`,
    params: {
      api_key: apiKey,
      page: page,
    },
  })
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      throw error
    })
}

export function getDetail({ type, id }: trendingParams) {
  return axios({
    method: 'get',
    url: `${baseUrl}/${type}/${id}`,
    params: {
      api_key: apiKey,
      language: 'en-US',
    },
  })
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      throw error
    })
}
