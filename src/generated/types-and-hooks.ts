import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type Query = {
   __typename?: 'Query';
  hello: Scalars['String'];
  users: Array<User>;
  user: User;
  artist: Artist;
  videos: Array<Video>;
  songs: Array<Song>;
  songsByGenre: Array<Song>;
  blogs: Array<Blog>;
  blog: Blog;
  studios: Array<Studio>;
  genre: Array<Genre>;
  welcome: Scalars['String'];
  messages: Array<Message>;
};


export type QueryUsersArgs = {
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<SortInput>>;
  filters?: Maybe<FilterInput>;
};


export type QueryUserArgs = {
  id: Scalars['String'];
};


export type QueryArtistArgs = {
  id: Scalars['String'];
};


export type QuerySongsArgs = {
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySongsByGenreArgs = {
  genre: Scalars['String'];
};


export type QueryBlogArgs = {
  id: Scalars['String'];
};


export type QueryMessagesArgs = {
  receiverId: Scalars['String'];
  userId: Scalars['String'];
  sort?: Maybe<Array<ChatSortInput>>;
};

export type SortInput = {
  direction?: Maybe<SortDirections>;
  field?: Maybe<UserSortField>;
};

export enum SortDirections {
  Asc = 'asc',
  Desc = 'desc'
}

export enum UserSortField {
  Name = 'name',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

export type FilterInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  talentCategory?: Maybe<AllowedTalentCategories>;
  profileType?: Maybe<AllowedProfiles>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export enum AllowedTalentCategories {
  Musician = 'musician',
  Producer = 'producer',
  Studio = 'studio',
  Videographer = 'videographer',
  Photographer = 'photographer'
}

export enum AllowedProfiles {
  Talent = 'talent',
  Business = 'business'
}


export type User = {
   __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
  avatar?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  interests?: Maybe<Array<Song>>;
  talentCategory: AllowedTalentCategories;
  profileType: AllowedProfiles;
  favourites?: Maybe<Favourites>;
  songs?: Maybe<Array<Song>>;
  connections?: Maybe<Array<FavouriteUser>>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type Song = {
   __typename?: 'Song';
  id: Scalars['ID'];
  title: Scalars['String'];
  url: Scalars['String'];
  img?: Maybe<Scalars['String']>;
  genre?: Maybe<AllowedGenre>;
  author?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export enum AllowedGenre {
  Hiphop = 'hiphop',
  Jazz = 'jazz',
  Techno = 'techno',
  Rock = 'rock',
  Electro = 'electro'
}

export type Favourites = {
   __typename?: 'Favourites';
  id: Scalars['ID'];
  users?: Maybe<Array<FavouriteUser>>;
  songs?: Maybe<Array<Song>>;
};

export type FavouriteUser = {
   __typename?: 'FavouriteUser';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
};

export type Artist = {
   __typename?: 'Artist';
  id: Scalars['ID'];
  name: Scalars['String'];
  avatar?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  talentCategory: AllowedTalentCategories;
  profileType: AllowedProfiles;
  songs?: Maybe<Array<Song>>;
};

export type Video = {
   __typename?: 'Video';
  id: Scalars['ID'];
  title: Scalars['String'];
  url: Scalars['String'];
};

export type Blog = {
   __typename?: 'Blog';
  id: Scalars['ID'];
  title: Scalars['String'];
  content: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  category: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type Studio = {
   __typename?: 'Studio';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  website: Scalars['String'];
  telephone: Scalars['String'];
  address: Address;
  coordinates: Coordinates;
};

export type Address = {
   __typename?: 'Address';
  street: Scalars['String'];
  zip: Scalars['String'];
  city: Scalars['String'];
  country: Scalars['String'];
};

export type Coordinates = {
   __typename?: 'Coordinates';
  long: Scalars['String'];
  lat: Scalars['String'];
};

export type Genre = {
   __typename?: 'Genre';
  id: Scalars['ID'];
  name: Scalars['String'];
  title: Scalars['String'];
  image?: Maybe<Scalars['String']>;
};

export type ChatSortInput = {
  direction?: Maybe<SortDirections>;
  field?: Maybe<ChatSortField>;
};

export enum ChatSortField {
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

export type Message = {
   __typename?: 'Message';
  id: Scalars['ID'];
  user: ChatUser;
  receiver: ChatUser;
  text: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  video?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
};

export type ChatUser = {
   __typename?: 'ChatUser';
  name: Scalars['String'];
  avatar?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

export type Mutation = {
   __typename?: 'Mutation';
  createUser: User;
  updateUser: User;
  updateUserFavourites: User;
  createVideo: Video;
  createSong: Song;
  createBlog: Blog;
  createStudio: Studio;
  updateStudio: Studio;
  createGenre: Genre;
  createMessage: Message;
  search: Search;
  searchUser: Array<User>;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
  id: Scalars['String'];
};


export type MutationUpdateUserFavouritesArgs = {
  input: UpdateUserInput;
  id: Scalars['String'];
};


export type MutationCreateVideoArgs = {
  input: CreateVideoInput;
};


export type MutationCreateSongArgs = {
  input: CreateSongInput;
};


export type MutationCreateBlogArgs = {
  input: CreateBlogInput;
};


export type MutationCreateStudioArgs = {
  input: CreateStudioInput;
};


export type MutationUpdateStudioArgs = {
  input: UpdateStudioInput;
  id: Scalars['String'];
};


export type MutationCreateGenreArgs = {
  input: CreateGenreInput;
};


export type MutationCreateMessageArgs = {
  input: CreateMessageInput;
};


export type MutationSearchArgs = {
  searchText: Scalars['String'];
};


export type MutationSearchUserArgs = {
  searchText: Scalars['String'];
};

export type CreateUserInput = {
  id: Scalars['ID'];
  name: Scalars['String'];
  avatar?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  talentCategory: AllowedTalentCategories;
  profileType: AllowedProfiles;
  interests?: Maybe<Array<Scalars['String']>>;
  favourites?: Maybe<FavouritesInput>;
  songs?: Maybe<Array<Scalars['String']>>;
  connections?: Maybe<Array<Scalars['String']>>;
};

export type FavouritesInput = {
  songs?: Maybe<Array<Scalars['String']>>;
  users?: Maybe<Array<Scalars['String']>>;
};

export type UpdateUserInput = {
  name?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  talentCategory?: Maybe<AllowedTalentCategories>;
  profileType?: Maybe<AllowedProfiles>;
  interests?: Maybe<Array<Scalars['String']>>;
  favourites?: Maybe<FavouritesInput>;
  songs?: Maybe<Array<Scalars['String']>>;
  connections?: Maybe<Array<Scalars['String']>>;
};

export type CreateVideoInput = {
  title: Scalars['String'];
  url: Scalars['String'];
};

export type CreateSongInput = {
  title: Scalars['String'];
  url: Scalars['String'];
  img?: Maybe<Scalars['String']>;
  genre?: Maybe<AllowedGenre>;
  author?: Maybe<Scalars['String']>;
};

export type CreateBlogInput = {
  title: Scalars['String'];
  content: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  category: Scalars['String'];
};

export type CreateStudioInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  website: Scalars['String'];
  telephone: Scalars['String'];
  address: AddressInput;
  coordinates: CoordinatesInput;
};

export type AddressInput = {
  street: Scalars['String'];
  zip: Scalars['String'];
  city: Scalars['String'];
  country: Scalars['String'];
};

export type CoordinatesInput = {
  long: Scalars['String'];
  lat: Scalars['String'];
};

export type UpdateStudioInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  telephone?: Maybe<Scalars['String']>;
  address?: Maybe<AddressUpdateInput>;
  coordinates?: Maybe<CoordinatesUpdateInput>;
};

export type AddressUpdateInput = {
  street?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
};

export type CoordinatesUpdateInput = {
  long?: Maybe<Scalars['String']>;
  lat?: Maybe<Scalars['String']>;
};

export type CreateGenreInput = {
  name: Scalars['String'];
  title: Scalars['String'];
  image?: Maybe<Scalars['String']>;
};

export type CreateMessageInput = {
  text: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  video?: Maybe<Scalars['String']>;
  user: ChatUserInput;
  receiver: ChatUserInput;
};

export type ChatUserInput = {
  name: Scalars['String'];
  avatar?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

export type Search = {
   __typename?: 'Search';
  users?: Maybe<Array<User>>;
  blogs?: Maybe<Array<Blog>>;
  songs?: Maybe<Array<Song>>;
};

export type Subscription = {
   __typename?: 'Subscription';
  newMessage: Message;
};


export type SubscriptionNewMessageArgs = {
  userId: Scalars['String'];
};

export type GetUserQueryVariables = {
  id: Scalars['String'];
};


export type GetUserQuery = (
  { __typename?: 'Query' }
  & { user: (
    { __typename?: 'User' }
    & Pick<User, 'name' | 'id' | 'talentCategory'>
  ) }
);

export type GetHomePageDataQueryVariables = {};


export type GetHomePageDataQuery = (
  { __typename?: 'Query' }
  & { songs: Array<(
    { __typename?: 'Song' }
    & Pick<Song, 'id' | 'title' | 'url' | 'img' | 'genre' | 'author' | 'createdAt' | 'updatedAt'>
  )>, blogs: Array<(
    { __typename?: 'Blog' }
    & Pick<Blog, 'id' | 'title' | 'image'>
  )>, genre: Array<(
    { __typename?: 'Genre' }
    & Pick<Genre, 'id' | 'name' | 'image' | 'title'>
  )>, producers: Array<(
    { __typename?: 'User' }
    & Pick<User, 'name' | 'id' | 'avatar' | 'talentCategory' | 'description'>
  )>, musicians: Array<(
    { __typename?: 'User' }
    & Pick<User, 'name' | 'id' | 'avatar' | 'talentCategory' | 'description'>
    & { songs?: Maybe<Array<(
      { __typename?: 'Song' }
      & Pick<Song, 'id' | 'title' | 'url' | 'img'>
    )>> }
  )> }
);

export type GetBlogPageDataQueryVariables = {};


export type GetBlogPageDataQuery = (
  { __typename?: 'Query' }
  & { blogs: Array<(
    { __typename?: 'Blog' }
    & Pick<Blog, 'id' | 'title' | 'image'>
  )> }
);

export type GetArticlePageDataQueryVariables = {
  id: Scalars['String'];
};


export type GetArticlePageDataQuery = (
  { __typename?: 'Query' }
  & { blog: (
    { __typename?: 'Blog' }
    & Pick<Blog, 'id' | 'title' | 'content' | 'category'>
  ) }
);

export type GetFavouritesQueryVariables = {
  id: Scalars['String'];
};


export type GetFavouritesQuery = (
  { __typename?: 'Query' }
  & { user: (
    { __typename?: 'User' }
    & { favourites?: Maybe<(
      { __typename?: 'Favourites' }
      & { users?: Maybe<Array<(
        { __typename?: 'FavouriteUser' }
        & Pick<FavouriteUser, 'id' | 'name' | 'avatar'>
      )>>, songs?: Maybe<Array<(
        { __typename?: 'Song' }
        & Pick<Song, 'id' | 'title' | 'url' | 'img' | 'genre' | 'author' | 'createdAt' | 'updatedAt'>
      )>> }
    )> }
  ) }
);

export type GetProfileQueryVariables = {
  id: Scalars['String'];
};


export type GetProfileQuery = (
  { __typename?: 'Query' }
  & { user: (
    { __typename?: 'User' }
    & Pick<User, 'name' | 'avatar' | 'description'>
    & { favourites?: Maybe<(
      { __typename?: 'Favourites' }
      & { users?: Maybe<Array<(
        { __typename?: 'FavouriteUser' }
        & Pick<FavouriteUser, 'id' | 'name' | 'avatar'>
      )>>, songs?: Maybe<Array<(
        { __typename?: 'Song' }
        & Pick<Song, 'id' | 'title' | 'url' | 'img' | 'genre' | 'author' | 'createdAt' | 'updatedAt'>
      )>> }
    )>, connections?: Maybe<Array<(
      { __typename?: 'FavouriteUser' }
      & Pick<FavouriteUser, 'id' | 'name' | 'avatar'>
    )>>, songs?: Maybe<Array<(
      { __typename?: 'Song' }
      & Pick<Song, 'id' | 'title' | 'url' | 'img' | 'genre' | 'author' | 'createdAt' | 'updatedAt'>
    )>> }
  ) }
);

export type GetStudiosQueryVariables = {};


export type GetStudiosQuery = (
  { __typename?: 'Query' }
  & { studios: Array<(
    { __typename?: 'Studio' }
    & Pick<Studio, 'name' | 'id' | 'description' | 'website' | 'telephone'>
    & { address: (
      { __typename?: 'Address' }
      & Pick<Address, 'country'>
    ), coordinates: (
      { __typename?: 'Coordinates' }
      & Pick<Coordinates, 'lat' | 'long'>
    ) }
  )> }
);

export type GetMessagesQueryVariables = {
  userId: Scalars['String'];
  receiverId: Scalars['String'];
};


export type GetMessagesQuery = (
  { __typename?: 'Query' }
  & { messages: Array<(
    { __typename?: 'Message' }
    & Pick<Message, 'id' | 'createdAt' | 'text' | 'image' | 'video'>
    & { user: (
      { __typename?: 'ChatUser' }
      & Pick<ChatUser, 'id' | 'name' | 'avatar'>
    ) }
  )> }
);

export type GetGenreQueryVariables = {};


export type GetGenreQuery = (
  { __typename?: 'Query' }
  & { genre: Array<(
    { __typename?: 'Genre' }
    & Pick<Genre, 'id' | 'name' | 'title' | 'image'>
  )> }
);

export type GetDataForArtistPageQueryVariables = {
  artistId: Scalars['String'];
  id: Scalars['String'];
};


export type GetDataForArtistPageQuery = (
  { __typename?: 'Query' }
  & { user: (
    { __typename?: 'User' }
    & { favourites?: Maybe<(
      { __typename?: 'Favourites' }
      & { users?: Maybe<Array<(
        { __typename?: 'FavouriteUser' }
        & Pick<FavouriteUser, 'id'>
      )>> }
    )> }
  ), artist: (
    { __typename?: 'Artist' }
    & Pick<Artist, 'name' | 'avatar' | 'description' | 'talentCategory'>
    & { songs?: Maybe<Array<(
      { __typename?: 'Song' }
      & Pick<Song, 'id' | 'title' | 'url' | 'img'>
    )>> }
  ) }
);

export type GetAllUserQueryVariables = {};


export type GetAllUserQuery = (
  { __typename?: 'Query' }
  & { users: Array<(
    { __typename?: 'User' }
    & Pick<User, 'name' | 'id' | 'avatar' | 'talentCategory' | 'description'>
  )> }
);

export type SongsByGenreQueryVariables = {
  genre: Scalars['String'];
};


export type SongsByGenreQuery = (
  { __typename?: 'Query' }
  & { songsByGenre: Array<(
    { __typename?: 'Song' }
    & Pick<Song, 'id' | 'title' | 'url' | 'img' | 'genre' | 'author' | 'createdAt' | 'updatedAt'>
  )> }
);


export const GetUserDocument = gql`
    query getUser($id: String!) {
  user(id: $id) {
    name
    id
    talentCategory
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        return ApolloReactHooks.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, baseOptions);
      }
export function useGetUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, baseOptions);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = ApolloReactCommon.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const GetHomePageDataDocument = gql`
    query getHomePageData {
  songs {
    id
    title
    url
    img
    genre
    author
    createdAt
    updatedAt
  }
  blogs {
    id
    title
    image
  }
  genre {
    id
    name
    image
    title
  }
  producers: users(sort: {direction: asc, field: name}, filters: {talentCategory: producer}, limit: 3) {
    name
    id
    avatar
    talentCategory
    description
  }
  musicians: users(sort: {direction: asc, field: name}, filters: {talentCategory: musician}, limit: 3) {
    name
    id
    avatar
    talentCategory
    description
    songs {
      id
      title
      url
      img
    }
  }
}
    `;

/**
 * __useGetHomePageDataQuery__
 *
 * To run a query within a React component, call `useGetHomePageDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHomePageDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHomePageDataQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetHomePageDataQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetHomePageDataQuery, GetHomePageDataQueryVariables>) {
        return ApolloReactHooks.useQuery<GetHomePageDataQuery, GetHomePageDataQueryVariables>(GetHomePageDataDocument, baseOptions);
      }
export function useGetHomePageDataLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetHomePageDataQuery, GetHomePageDataQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetHomePageDataQuery, GetHomePageDataQueryVariables>(GetHomePageDataDocument, baseOptions);
        }
export type GetHomePageDataQueryHookResult = ReturnType<typeof useGetHomePageDataQuery>;
export type GetHomePageDataLazyQueryHookResult = ReturnType<typeof useGetHomePageDataLazyQuery>;
export type GetHomePageDataQueryResult = ApolloReactCommon.QueryResult<GetHomePageDataQuery, GetHomePageDataQueryVariables>;
export const GetBlogPageDataDocument = gql`
    query getBlogPageData {
  blogs {
    id
    title
    image
  }
}
    `;

/**
 * __useGetBlogPageDataQuery__
 *
 * To run a query within a React component, call `useGetBlogPageDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBlogPageDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBlogPageDataQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBlogPageDataQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetBlogPageDataQuery, GetBlogPageDataQueryVariables>) {
        return ApolloReactHooks.useQuery<GetBlogPageDataQuery, GetBlogPageDataQueryVariables>(GetBlogPageDataDocument, baseOptions);
      }
export function useGetBlogPageDataLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetBlogPageDataQuery, GetBlogPageDataQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetBlogPageDataQuery, GetBlogPageDataQueryVariables>(GetBlogPageDataDocument, baseOptions);
        }
export type GetBlogPageDataQueryHookResult = ReturnType<typeof useGetBlogPageDataQuery>;
export type GetBlogPageDataLazyQueryHookResult = ReturnType<typeof useGetBlogPageDataLazyQuery>;
export type GetBlogPageDataQueryResult = ApolloReactCommon.QueryResult<GetBlogPageDataQuery, GetBlogPageDataQueryVariables>;
export const GetArticlePageDataDocument = gql`
    query getArticlePageData($id: String!) {
  blog(id: $id) {
    id
    title
    content
    category
  }
}
    `;

/**
 * __useGetArticlePageDataQuery__
 *
 * To run a query within a React component, call `useGetArticlePageDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetArticlePageDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetArticlePageDataQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetArticlePageDataQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetArticlePageDataQuery, GetArticlePageDataQueryVariables>) {
        return ApolloReactHooks.useQuery<GetArticlePageDataQuery, GetArticlePageDataQueryVariables>(GetArticlePageDataDocument, baseOptions);
      }
export function useGetArticlePageDataLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetArticlePageDataQuery, GetArticlePageDataQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetArticlePageDataQuery, GetArticlePageDataQueryVariables>(GetArticlePageDataDocument, baseOptions);
        }
export type GetArticlePageDataQueryHookResult = ReturnType<typeof useGetArticlePageDataQuery>;
export type GetArticlePageDataLazyQueryHookResult = ReturnType<typeof useGetArticlePageDataLazyQuery>;
export type GetArticlePageDataQueryResult = ApolloReactCommon.QueryResult<GetArticlePageDataQuery, GetArticlePageDataQueryVariables>;
export const GetFavouritesDocument = gql`
    query getFavourites($id: String!) {
  user(id: $id) {
    favourites {
      users {
        id
        name
        avatar
      }
      songs {
        id
        title
        url
        img
        genre
        author
        createdAt
        updatedAt
      }
    }
  }
}
    `;

/**
 * __useGetFavouritesQuery__
 *
 * To run a query within a React component, call `useGetFavouritesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFavouritesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFavouritesQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetFavouritesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetFavouritesQuery, GetFavouritesQueryVariables>) {
        return ApolloReactHooks.useQuery<GetFavouritesQuery, GetFavouritesQueryVariables>(GetFavouritesDocument, baseOptions);
      }
export function useGetFavouritesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetFavouritesQuery, GetFavouritesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetFavouritesQuery, GetFavouritesQueryVariables>(GetFavouritesDocument, baseOptions);
        }
export type GetFavouritesQueryHookResult = ReturnType<typeof useGetFavouritesQuery>;
export type GetFavouritesLazyQueryHookResult = ReturnType<typeof useGetFavouritesLazyQuery>;
export type GetFavouritesQueryResult = ApolloReactCommon.QueryResult<GetFavouritesQuery, GetFavouritesQueryVariables>;
export const GetProfileDocument = gql`
    query getProfile($id: String!) {
  user(id: $id) {
    name
    avatar
    description
    favourites {
      users {
        id
        name
        avatar
      }
      songs {
        id
        title
        url
        img
        genre
        author
        createdAt
        updatedAt
      }
    }
    connections {
      id
      name
      avatar
    }
    songs {
      id
      title
      url
      img
      genre
      author
      createdAt
      updatedAt
    }
  }
}
    `;

/**
 * __useGetProfileQuery__
 *
 * To run a query within a React component, call `useGetProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfileQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProfileQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetProfileQuery, GetProfileQueryVariables>) {
        return ApolloReactHooks.useQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfileDocument, baseOptions);
      }
export function useGetProfileLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetProfileQuery, GetProfileQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfileDocument, baseOptions);
        }
export type GetProfileQueryHookResult = ReturnType<typeof useGetProfileQuery>;
export type GetProfileLazyQueryHookResult = ReturnType<typeof useGetProfileLazyQuery>;
export type GetProfileQueryResult = ApolloReactCommon.QueryResult<GetProfileQuery, GetProfileQueryVariables>;
export const GetStudiosDocument = gql`
    query getStudios {
  studios {
    name
    id
    description
    website
    telephone
    address {
      country
    }
    coordinates {
      lat
      long
    }
  }
}
    `;

/**
 * __useGetStudiosQuery__
 *
 * To run a query within a React component, call `useGetStudiosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStudiosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStudiosQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetStudiosQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetStudiosQuery, GetStudiosQueryVariables>) {
        return ApolloReactHooks.useQuery<GetStudiosQuery, GetStudiosQueryVariables>(GetStudiosDocument, baseOptions);
      }
export function useGetStudiosLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetStudiosQuery, GetStudiosQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetStudiosQuery, GetStudiosQueryVariables>(GetStudiosDocument, baseOptions);
        }
export type GetStudiosQueryHookResult = ReturnType<typeof useGetStudiosQuery>;
export type GetStudiosLazyQueryHookResult = ReturnType<typeof useGetStudiosLazyQuery>;
export type GetStudiosQueryResult = ApolloReactCommon.QueryResult<GetStudiosQuery, GetStudiosQueryVariables>;
export const GetMessagesDocument = gql`
    query getMessages($userId: String!, $receiverId: String!) {
  messages(sort: {direction: desc, field: createdAt}, userId: $userId, receiverId: $receiverId) {
    user {
      id
      name
      avatar
    }
    id
    createdAt
    text
    image
    video
  }
}
    `;

/**
 * __useGetMessagesQuery__
 *
 * To run a query within a React component, call `useGetMessagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMessagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMessagesQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      receiverId: // value for 'receiverId'
 *   },
 * });
 */
export function useGetMessagesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetMessagesQuery, GetMessagesQueryVariables>) {
        return ApolloReactHooks.useQuery<GetMessagesQuery, GetMessagesQueryVariables>(GetMessagesDocument, baseOptions);
      }
export function useGetMessagesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetMessagesQuery, GetMessagesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetMessagesQuery, GetMessagesQueryVariables>(GetMessagesDocument, baseOptions);
        }
export type GetMessagesQueryHookResult = ReturnType<typeof useGetMessagesQuery>;
export type GetMessagesLazyQueryHookResult = ReturnType<typeof useGetMessagesLazyQuery>;
export type GetMessagesQueryResult = ApolloReactCommon.QueryResult<GetMessagesQuery, GetMessagesQueryVariables>;
export const GetGenreDocument = gql`
    query getGenre {
  genre {
    id
    name
    title
    image
  }
}
    `;

/**
 * __useGetGenreQuery__
 *
 * To run a query within a React component, call `useGetGenreQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGenreQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGenreQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetGenreQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetGenreQuery, GetGenreQueryVariables>) {
        return ApolloReactHooks.useQuery<GetGenreQuery, GetGenreQueryVariables>(GetGenreDocument, baseOptions);
      }
export function useGetGenreLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetGenreQuery, GetGenreQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetGenreQuery, GetGenreQueryVariables>(GetGenreDocument, baseOptions);
        }
export type GetGenreQueryHookResult = ReturnType<typeof useGetGenreQuery>;
export type GetGenreLazyQueryHookResult = ReturnType<typeof useGetGenreLazyQuery>;
export type GetGenreQueryResult = ApolloReactCommon.QueryResult<GetGenreQuery, GetGenreQueryVariables>;
export const GetDataForArtistPageDocument = gql`
    query getDataForArtistPage($artistId: String!, $id: String!) {
  user(id: $id) {
    favourites {
      users {
        id
      }
    }
  }
  artist(id: $artistId) {
    name
    avatar
    description
    talentCategory
    songs {
      id
      title
      url
      img
    }
  }
}
    `;

/**
 * __useGetDataForArtistPageQuery__
 *
 * To run a query within a React component, call `useGetDataForArtistPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDataForArtistPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDataForArtistPageQuery({
 *   variables: {
 *      artistId: // value for 'artistId'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetDataForArtistPageQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetDataForArtistPageQuery, GetDataForArtistPageQueryVariables>) {
        return ApolloReactHooks.useQuery<GetDataForArtistPageQuery, GetDataForArtistPageQueryVariables>(GetDataForArtistPageDocument, baseOptions);
      }
export function useGetDataForArtistPageLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetDataForArtistPageQuery, GetDataForArtistPageQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetDataForArtistPageQuery, GetDataForArtistPageQueryVariables>(GetDataForArtistPageDocument, baseOptions);
        }
export type GetDataForArtistPageQueryHookResult = ReturnType<typeof useGetDataForArtistPageQuery>;
export type GetDataForArtistPageLazyQueryHookResult = ReturnType<typeof useGetDataForArtistPageLazyQuery>;
export type GetDataForArtistPageQueryResult = ApolloReactCommon.QueryResult<GetDataForArtistPageQuery, GetDataForArtistPageQueryVariables>;
export const GetAllUserDocument = gql`
    query getAllUser {
  users(limit: 100) {
    name
    id
    avatar
    talentCategory
    description
  }
}
    `;

/**
 * __useGetAllUserQuery__
 *
 * To run a query within a React component, call `useGetAllUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAllUserQuery, GetAllUserQueryVariables>) {
        return ApolloReactHooks.useQuery<GetAllUserQuery, GetAllUserQueryVariables>(GetAllUserDocument, baseOptions);
      }
export function useGetAllUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAllUserQuery, GetAllUserQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetAllUserQuery, GetAllUserQueryVariables>(GetAllUserDocument, baseOptions);
        }
export type GetAllUserQueryHookResult = ReturnType<typeof useGetAllUserQuery>;
export type GetAllUserLazyQueryHookResult = ReturnType<typeof useGetAllUserLazyQuery>;
export type GetAllUserQueryResult = ApolloReactCommon.QueryResult<GetAllUserQuery, GetAllUserQueryVariables>;
export const SongsByGenreDocument = gql`
    query songsByGenre($genre: String!) {
  songsByGenre(genre: $genre) {
    id
    title
    url
    img
    genre
    author
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useSongsByGenreQuery__
 *
 * To run a query within a React component, call `useSongsByGenreQuery` and pass it any options that fit your needs.
 * When your component renders, `useSongsByGenreQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSongsByGenreQuery({
 *   variables: {
 *      genre: // value for 'genre'
 *   },
 * });
 */
export function useSongsByGenreQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SongsByGenreQuery, SongsByGenreQueryVariables>) {
        return ApolloReactHooks.useQuery<SongsByGenreQuery, SongsByGenreQueryVariables>(SongsByGenreDocument, baseOptions);
      }
export function useSongsByGenreLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SongsByGenreQuery, SongsByGenreQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SongsByGenreQuery, SongsByGenreQueryVariables>(SongsByGenreDocument, baseOptions);
        }
export type SongsByGenreQueryHookResult = ReturnType<typeof useSongsByGenreQuery>;
export type SongsByGenreLazyQueryHookResult = ReturnType<typeof useSongsByGenreLazyQuery>;
export type SongsByGenreQueryResult = ApolloReactCommon.QueryResult<SongsByGenreQuery, SongsByGenreQueryVariables>;