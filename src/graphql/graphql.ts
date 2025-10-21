/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `DateTime` scalar represents an ISO-8601 compliant date time type. */
  DateTime: { input: any; output: any; }
  /** Scalar representing a set of fields. */
  FieldSet: { input: any; output: any; }
  openfed__Scope: { input: any; output: any; }
};

/** Alarm resource definition. */
export type Alarm = {
  __typename?: 'Alarm';
  /** The name of the user who added this resource. */
  addedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was added. */
  addedTime?: Maybe<Scalars['DateTime']['output']>;
  alarmConfiguration: AlarmConfiguration;
  /** Identifier of the alarm configuration. */
  alarmConfigurationId: Scalars['String']['output'];
  /** The name of the user who deleted this resource. */
  deletedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was deleted. */
  deletedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Timestamp of when the alarm stopped. */
  endTime?: Maybe<Scalars['DateTime']['output']>;
  /** Unique identifier of the resource object (GUID string). */
  id: Scalars['ID']['output'];
  /** The version of the specification which the resource uses. */
  specVersion: Scalars['String']['output'];
  /** Timestamp of when the alarm started. */
  startTime: Scalars['DateTime']['output'];
  /** The name of the user who updated this resource. */
  updatedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was updated. */
  updatedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version: Scalars['String']['output'];
};

/** Alarm action resource definition. */
export type AlarmActionFilterInput = {
  /** The name of the user who added this resource. */
  addedBy?: InputMaybe<StringOperationFilterInput>;
  /** The timestamp when the resource was added. */
  addedTime?: InputMaybe<DateTimeOperationFilterInput>;
  and?: InputMaybe<Array<AlarmActionFilterInput>>;
  /** Identifier of the related destination component (digital output, video channel, etc.). */
  componentId?: InputMaybe<StringOperationFilterInput>;
  /** The name of the user who deleted this resource. */
  deletedBy?: InputMaybe<StringOperationFilterInput>;
  /** The timestamp when the resource was deleted. */
  deletedTime?: InputMaybe<DateTimeOperationFilterInput>;
  /** Unique identifier of the resource object (GUID string). */
  id?: InputMaybe<StringOperationFilterInput>;
  /** Alarm trigger type. */
  kind?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<AlarmActionFilterInput>>;
  /** Identifier of the parent recorder. */
  recorderId?: InputMaybe<StringOperationFilterInput>;
  /** The version of the specification which the resource uses. */
  specVersion?: InputMaybe<StringOperationFilterInput>;
  /** The name of the user who updated this resource. */
  updatedBy?: InputMaybe<StringOperationFilterInput>;
  /** The timestamp when the resource was updated. */
  updatedTime?: InputMaybe<DateTimeOperationFilterInput>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version?: InputMaybe<StringOperationFilterInput>;
};

/** Alarm action resource definition. */
export type AlarmActionSortInput = {
  /** The name of the user who added this resource. */
  addedBy?: InputMaybe<SortEnumType>;
  /** The timestamp when the resource was added. */
  addedTime?: InputMaybe<SortEnumType>;
  /** Identifier of the related destination component (digital output, video channel, etc.). */
  componentId?: InputMaybe<SortEnumType>;
  /** The name of the user who deleted this resource. */
  deletedBy?: InputMaybe<SortEnumType>;
  /** The timestamp when the resource was deleted. */
  deletedTime?: InputMaybe<SortEnumType>;
  /** Unique identifier of the resource object (GUID string). */
  id?: InputMaybe<SortEnumType>;
  /** Alarm trigger type. */
  kind?: InputMaybe<SortEnumType>;
  /** Identifier of the parent recorder. */
  recorderId?: InputMaybe<SortEnumType>;
  /** The version of the specification which the resource uses. */
  specVersion?: InputMaybe<SortEnumType>;
  /** The name of the user who updated this resource. */
  updatedBy?: InputMaybe<SortEnumType>;
  /** The timestamp when the resource was updated. */
  updatedTime?: InputMaybe<SortEnumType>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type AlarmActionsConnection = {
  __typename?: 'AlarmActionsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<AlarmActionsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Maybe<IAlarmAction>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type AlarmActionsEdge = {
  __typename?: 'AlarmActionsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<IAlarmAction>;
};

/** Template for a AlarmConfiguration entity that is used with relation to the AlarmNode entity. */
export type AlarmConfiguration = {
  __typename?: 'AlarmConfiguration';
  /** The name of the user who added this resource. */
  addedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was added. */
  addedTime?: Maybe<Scalars['DateTime']['output']>;
  alarmNodes?: Maybe<AlarmNodesConnection>;
  /** The name of the user who deleted this resource. */
  deletedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was deleted. */
  deletedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Unique identifier of the resource object (GUID string). */
  id: Scalars['ID']['output'];
  recorder: Recorder;
  /** Identifier of the parent recorder. */
  recorderId: Scalars['String']['output'];
  /** Alarm configuration settings (parameters that are currently chosen by client). */
  settings: AlarmConfigurationSettings;
  /** The version of the specification which the resource uses. */
  specVersion: Scalars['String']['output'];
  /** Alarm configuration status (parameters that can be modified outside by client). */
  status: AlarmConfigurationStatus;
  /** The name of the user who updated this resource. */
  updatedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was updated. */
  updatedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version: Scalars['String']['output'];
};


/** Template for a AlarmConfiguration entity that is used with relation to the AlarmNode entity. */
export type AlarmConfigurationAlarmNodesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<ProfileNodeSortInput>>;
  where?: InputMaybe<ProfileNodeFilterInput>;
};

/** The data type for the alarm configuration creation. */
export type AlarmConfigurationCreateInput = {
  /** List of the action identifiers that can be applied to the alarm. */
  actionIds: Array<Scalars['String']['input']>;
  /** Identifier of the alarm trigger. */
  alarmTriggerId: Scalars['String']['input'];
  /** Resource custom description which is visible for user, optional. */
  description: Scalars['String']['input'];
  /** Is resource enabled or disabled. */
  enabled: Scalars['Boolean']['input'];
  /** Identifier of the end alarm trigger (if the identifier is empty, then it is not used). */
  endAlarmTriggerId: Scalars['String']['input'];
  /** Resource display name which is visible for user. */
  name: Scalars['String']['input'];
  /** Alarm priority. */
  priority: AlarmPriority;
  /** Identifier of parent recorder. */
  recorderId: Scalars['String']['input'];
  /** Alarm schedule. */
  schedule: Scalars['String']['input'];
};

/** Alarm configuration resource definition. */
export type AlarmConfigurationFilterInput = {
  /** The name of the user who added this resource. */
  addedBy?: InputMaybe<StringOperationFilterInput>;
  /** The timestamp when the resource was added. */
  addedTime?: InputMaybe<DateTimeOperationFilterInput>;
  and?: InputMaybe<Array<AlarmConfigurationFilterInput>>;
  /** The name of the user who deleted this resource. */
  deletedBy?: InputMaybe<StringOperationFilterInput>;
  /** The timestamp when the resource was deleted. */
  deletedTime?: InputMaybe<DateTimeOperationFilterInput>;
  /** Unique identifier of the resource object (GUID string). */
  id?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<AlarmConfigurationFilterInput>>;
  /** Identifier of the parent recorder. */
  recorderId?: InputMaybe<StringOperationFilterInput>;
  /** Alarm configuration settings (parameters that are currently chosen by client). */
  settings?: InputMaybe<AlarmConfigurationSettingsFilterInput>;
  /** The version of the specification which the resource uses. */
  specVersion?: InputMaybe<StringOperationFilterInput>;
  /** Alarm configuration status (parameters that can be modified outside by client). */
  status?: InputMaybe<AlarmConfigurationStatusFilterInput>;
  /** The name of the user who updated this resource. */
  updatedBy?: InputMaybe<StringOperationFilterInput>;
  /** The timestamp when the resource was updated. */
  updatedTime?: InputMaybe<DateTimeOperationFilterInput>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version?: InputMaybe<StringOperationFilterInput>;
};

/** Alarm configuration settings definition. */
export type AlarmConfigurationSettings = {
  __typename?: 'AlarmConfigurationSettings';
  /** List of the action identifiers that can be applied to the alarm. */
  actionIds: Array<Scalars['String']['output']>;
  alarmActions?: Maybe<AlarmActionsConnection>;
  alarmTrigger?: Maybe<IAlarmTrigger>;
  /** Identifier of the alarm trigger. */
  alarmTriggerId: Scalars['String']['output'];
  /** Resource custom description which is visible for user, optional. */
  description: Scalars['String']['output'];
  /** Is resource enabled or disabled. */
  enabled: Scalars['Boolean']['output'];
  endAlarmTrigger?: Maybe<IAlarmTrigger>;
  /** Identifier of the end alarm trigger (if the identifier is empty, then it is not used). */
  endAlarmTriggerId: Scalars['String']['output'];
  /** Resource display name which is visible for user. */
  name: Scalars['String']['output'];
  /** Alarm priority. */
  priority: AlarmPriority;
  /** Alarm schedule. */
  schedule: Scalars['String']['output'];
};


/** Alarm configuration settings definition. */
export type AlarmConfigurationSettingsAlarmActionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<AlarmActionSortInput>>;
  where?: InputMaybe<AlarmActionFilterInput>;
};

/** Alarm configuration settings definition. */
export type AlarmConfigurationSettingsFilterInput = {
  /** List of the action identifiers that can be applied to the alarm. */
  actionIds?: InputMaybe<ListStringOperationFilterInput>;
  /** Identifier of the alarm trigger. */
  alarmTriggerId?: InputMaybe<StringOperationFilterInput>;
  and?: InputMaybe<Array<AlarmConfigurationSettingsFilterInput>>;
  /** Resource custom description which is visible for user, optional. */
  description?: InputMaybe<StringOperationFilterInput>;
  /** Is resource enabled or disabled. */
  enabled?: InputMaybe<BooleanOperationFilterInput>;
  /** Identifier of the end alarm trigger (if the identifier is empty, then it is not used). */
  endAlarmTriggerId?: InputMaybe<StringOperationFilterInput>;
  /** Resource display name which is visible for user. */
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<AlarmConfigurationSettingsFilterInput>>;
  /** Alarm priority. */
  priority?: InputMaybe<AlarmPriorityOperationFilterInput>;
  /** Alarm schedule. */
  schedule?: InputMaybe<StringOperationFilterInput>;
};

/** Alarm configuration settings definition. */
export type AlarmConfigurationSettingsSortInput = {
  /** Identifier of the alarm trigger. */
  alarmTriggerId?: InputMaybe<SortEnumType>;
  /** Resource custom description which is visible for user, optional. */
  description?: InputMaybe<SortEnumType>;
  /** Is resource enabled or disabled. */
  enabled?: InputMaybe<SortEnumType>;
  /** Identifier of the end alarm trigger (if the identifier is empty, then it is not used). */
  endAlarmTriggerId?: InputMaybe<SortEnumType>;
  /** Resource display name which is visible for user. */
  name?: InputMaybe<SortEnumType>;
  /** Alarm priority. */
  priority?: InputMaybe<SortEnumType>;
  /** Alarm schedule. */
  schedule?: InputMaybe<SortEnumType>;
};

/** Alarm configuration resource definition. */
export type AlarmConfigurationSortInput = {
  /** The name of the user who added this resource. */
  addedBy?: InputMaybe<SortEnumType>;
  /** The timestamp when the resource was added. */
  addedTime?: InputMaybe<SortEnumType>;
  /** The name of the user who deleted this resource. */
  deletedBy?: InputMaybe<SortEnumType>;
  /** The timestamp when the resource was deleted. */
  deletedTime?: InputMaybe<SortEnumType>;
  /** Unique identifier of the resource object (GUID string). */
  id?: InputMaybe<SortEnumType>;
  /** Identifier of the parent recorder. */
  recorderId?: InputMaybe<SortEnumType>;
  /** Alarm configuration settings (parameters that are currently chosen by client). */
  settings?: InputMaybe<AlarmConfigurationSettingsSortInput>;
  /** The version of the specification which the resource uses. */
  specVersion?: InputMaybe<SortEnumType>;
  /** Alarm configuration status (parameters that can be modified outside by client). */
  status?: InputMaybe<AlarmConfigurationStatusSortInput>;
  /** The name of the user who updated this resource. */
  updatedBy?: InputMaybe<SortEnumType>;
  /** The timestamp when the resource was updated. */
  updatedTime?: InputMaybe<SortEnumType>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version?: InputMaybe<SortEnumType>;
};

/** Alarm configuration status definition. */
export type AlarmConfigurationStatus = {
  __typename?: 'AlarmConfigurationStatus';
  /** The adding condition of the alarm configuration. */
  added: Condition;
  /** The configuration condition of the alarm configuration when it is archived (saved for existing alarms). */
  archived: Condition;
};

/** Alarm configuration status definition. */
export type AlarmConfigurationStatusFilterInput = {
  /** The adding condition of the alarm configuration. */
  added?: InputMaybe<ConditionFilterInput>;
  and?: InputMaybe<Array<AlarmConfigurationStatusFilterInput>>;
  /** The configuration condition of the alarm configuration when it is archived (saved for existing alarms). */
  archived?: InputMaybe<ConditionFilterInput>;
  or?: InputMaybe<Array<AlarmConfigurationStatusFilterInput>>;
};

/** Alarm configuration status definition. */
export type AlarmConfigurationStatusSortInput = {
  /** The adding condition of the alarm configuration. */
  added?: InputMaybe<ConditionSortInput>;
  /** The configuration condition of the alarm configuration when it is archived (saved for existing alarms). */
  archived?: InputMaybe<ConditionSortInput>;
};

/** The data type for the alarm configuration update. */
export type AlarmConfigurationUpdateInput = {
  /** List of the action identifiers that can be applied to the alarm. */
  actionIds?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Identifier of the alarm trigger. */
  alarmTriggerId?: InputMaybe<Scalars['String']['input']>;
  /** Resource custom description which is visible for user, optional. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Is resource enabled or disabled. */
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Identifier of the end alarm trigger. */
  endAlarmTriggerId?: InputMaybe<Scalars['String']['input']>;
  /** Unique identifier of the resource object (GUID string). */
  id: Scalars['String']['input'];
  /** Resource display name which is visible for user. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Alarm priority. */
  priority?: InputMaybe<AlarmPriority>;
  /** Alarm schedule. */
  schedule?: InputMaybe<Scalars['String']['input']>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version: Scalars['String']['input'];
};

/** The data type for the alarm creation. */
export type AlarmCreateInput = {
  /** Identifier of the alarm configuration. */
  alarmConfigurationId: Scalars['String']['input'];
  /** Timestamp of when the alarm stopped. */
  endTime?: InputMaybe<Scalars['DateTime']['input']>;
  /** Timestamp of when the alarm started. */
  startTime: Scalars['DateTime']['input'];
};

/** Alarm resource definition. */
export type AlarmFilterInput = {
  /** The name of the user who added this resource. */
  addedBy?: InputMaybe<StringOperationFilterInput>;
  /** The timestamp when the resource was added. */
  addedTime?: InputMaybe<DateTimeOperationFilterInput>;
  /** Identifier of the alarm configuration. */
  alarmConfigurationId?: InputMaybe<StringOperationFilterInput>;
  and?: InputMaybe<Array<AlarmFilterInput>>;
  /** The name of the user who deleted this resource. */
  deletedBy?: InputMaybe<StringOperationFilterInput>;
  /** The timestamp when the resource was deleted. */
  deletedTime?: InputMaybe<DateTimeOperationFilterInput>;
  /** Timestamp of when the alarm stopped. */
  endTime?: InputMaybe<DateTimeOperationFilterInput>;
  /** Unique identifier of the resource object (GUID string). */
  id?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<AlarmFilterInput>>;
  /** The version of the specification which the resource uses. */
  specVersion?: InputMaybe<StringOperationFilterInput>;
  /** Timestamp of when the alarm started. */
  startTime?: InputMaybe<DateTimeOperationFilterInput>;
  /** The name of the user who updated this resource. */
  updatedBy?: InputMaybe<StringOperationFilterInput>;
  /** The timestamp when the resource was updated. */
  updatedTime?: InputMaybe<DateTimeOperationFilterInput>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version?: InputMaybe<StringOperationFilterInput>;
};

/** Alarm profile node resource definition. */
export type AlarmNode = IProfileNode & {
  __typename?: 'AlarmNode';
  /** Indicates if acknowledgment is allowed. */
  acknowledgeAllowed: Scalars['Boolean']['output'];
  /** The name of the user who added this resource. */
  addedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was added. */
  addedTime?: Maybe<Scalars['DateTime']['output']>;
  alarmConfiguration: AlarmConfiguration;
  /** Identifier of the related alarm configuration. */
  componentId: Scalars['String']['output'];
  /** The name of the user who deleted this resource. */
  deletedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was deleted. */
  deletedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Profile node description which is visible for user, optional. */
  description: Scalars['String']['output'];
  /** Indicates if export of alarm is allowed. */
  exportAllowed: Scalars['Boolean']['output'];
  /** The icon set number for the profile node icon. */
  iconSetNumber?: Maybe<Scalars['String']['output']>;
  /** Unique identifier of the resource object (GUID string). */
  id: Scalars['String']['output'];
  /** Profile node type. */
  kind: Scalars['String']['output'];
  /** Profile node name which is visible for user. */
  name: Scalars['String']['output'];
  /** Profile node parent node identifier. */
  parentNodeId?: Maybe<Scalars['String']['output']>;
  /** Indicates if playback is allowed. */
  playbackAllowed: Scalars['Boolean']['output'];
  profile: Profile;
  /** Profile node profile identifier. */
  profileId: Scalars['String']['output'];
  /** Indicates if realtime alarm is allowed. */
  realtimeAllowed: Scalars['Boolean']['output'];
  /** The version of the specification which the resource uses. */
  specVersion: Scalars['String']['output'];
  /** The name of the user who updated this resource. */
  updatedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was updated. */
  updatedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version: Scalars['String']['output'];
};

/** The data type for the alarm profile node creation. */
export type AlarmNodeCreateInput = {
  /** Indicates if acknowledgment is allowed. */
  acknowledgeAllowed: Scalars['Boolean']['input'];
  /** Identifier of the related alarm configuration. */
  componentId: Scalars['String']['input'];
  /** Profile node description which is visible for user, optional. */
  description: Scalars['String']['input'];
  /** Indicates if export of alarm is allowed. */
  exportAllowed: Scalars['Boolean']['input'];
  /** The icon set number for the profile node icon. */
  iconSetNumber?: InputMaybe<Scalars['String']['input']>;
  /** Profile node name which is visible for user. */
  name: Scalars['String']['input'];
  /** Profile node parent node identifier. */
  parentNodeId?: InputMaybe<Scalars['String']['input']>;
  /** Indicates if playback is allowed. */
  playbackAllowed: Scalars['Boolean']['input'];
  /** Profile node profile identifier. */
  profileId: Scalars['String']['input'];
  /** Indicates if realtime alarm is allowed. */
  realtimeAllowed: Scalars['Boolean']['input'];
};

export type AlarmNodeUpdateInput = {
  /** Indicates if acknowledgment is allowed. */
  acknowledgeAllowed?: InputMaybe<Scalars['Boolean']['input']>;
  /** Profile node description which is visible for user, optional. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Indicates if export of alarm is allowed. */
  exportAllowed?: InputMaybe<Scalars['Boolean']['input']>;
  /** The icon set number for the profile node icon. */
  iconSetNumber?: InputMaybe<Scalars['String']['input']>;
  /** Unique identifier of the resource object (GUID string). */
  id: Scalars['String']['input'];
  /** Profile node name which is visible for user. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Profile node parent node identifier. */
  parentNodeId?: InputMaybe<Scalars['String']['input']>;
  /** Indicates if playback is allowed. */
  playbackAllowed?: InputMaybe<Scalars['Boolean']['input']>;
  /** Indicates if realtime alarm is allowed. */
  realtimeAllowed?: InputMaybe<Scalars['Boolean']['input']>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version: Scalars['String']['input'];
};

/** A connection to a list of items. */
export type AlarmNodesConnection = {
  __typename?: 'AlarmNodesConnection';
  /** A list of edges. */
  edges?: Maybe<Array<AlarmNodesEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Maybe<AlarmNode>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type AlarmNodesEdge = {
  __typename?: 'AlarmNodesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<AlarmNode>;
};

/** The priority of the alarm. */
export enum AlarmPriority {
  High = 'HIGH',
  Low = 'LOW',
  Normal = 'NORMAL'
}

export type AlarmPriorityOperationFilterInput = {
  eq?: InputMaybe<AlarmPriority>;
  in?: InputMaybe<Array<AlarmPriority>>;
  neq?: InputMaybe<AlarmPriority>;
  nin?: InputMaybe<Array<AlarmPriority>>;
};

/** Alarm resource definition. */
export type AlarmSortInput = {
  /** The name of the user who added this resource. */
  addedBy?: InputMaybe<SortEnumType>;
  /** The timestamp when the resource was added. */
  addedTime?: InputMaybe<SortEnumType>;
  /** Identifier of the alarm configuration. */
  alarmConfigurationId?: InputMaybe<SortEnumType>;
  /** The name of the user who deleted this resource. */
  deletedBy?: InputMaybe<SortEnumType>;
  /** The timestamp when the resource was deleted. */
  deletedTime?: InputMaybe<SortEnumType>;
  /** Timestamp of when the alarm stopped. */
  endTime?: InputMaybe<SortEnumType>;
  /** Unique identifier of the resource object (GUID string). */
  id?: InputMaybe<SortEnumType>;
  /** The version of the specification which the resource uses. */
  specVersion?: InputMaybe<SortEnumType>;
  /** Timestamp of when the alarm started. */
  startTime?: InputMaybe<SortEnumType>;
  /** The name of the user who updated this resource. */
  updatedBy?: InputMaybe<SortEnumType>;
  /** The timestamp when the resource was updated. */
  updatedTime?: InputMaybe<SortEnumType>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version?: InputMaybe<SortEnumType>;
};

/** Alarm trigger resource definition. */
export type AlarmTriggerFilterInput = {
  /** Indicates if acknowledgment is required. */
  acknowledgeRequired?: InputMaybe<BooleanOperationFilterInput>;
  /** The name of the user who added this resource. */
  addedBy?: InputMaybe<StringOperationFilterInput>;
  /** The timestamp when the resource was added. */
  addedTime?: InputMaybe<DateTimeOperationFilterInput>;
  and?: InputMaybe<Array<AlarmTriggerFilterInput>>;
  /** Identifier of the related source component (digital input, video channel, etc.). */
  componentId?: InputMaybe<StringOperationFilterInput>;
  /** The name of the user who deleted this resource. */
  deletedBy?: InputMaybe<StringOperationFilterInput>;
  /** The timestamp when the resource was deleted. */
  deletedTime?: InputMaybe<DateTimeOperationFilterInput>;
  /** Unique event number for legacy recorders. */
  eventNumber?: InputMaybe<IntOperationFilterInput>;
  /** Unique identifier of the resource object (GUID string). */
  id?: InputMaybe<StringOperationFilterInput>;
  /** Alarm trigger type. */
  kind?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<AlarmTriggerFilterInput>>;
  /** Identifier of the parent recorder. */
  recorderId?: InputMaybe<StringOperationFilterInput>;
  /** The version of the specification which the resource uses. */
  specVersion?: InputMaybe<StringOperationFilterInput>;
  /** Alarm trigger tolerance time in seconds. */
  toleranceSeconds?: InputMaybe<IntOperationFilterInput>;
  /** The name of the user who updated this resource. */
  updatedBy?: InputMaybe<StringOperationFilterInput>;
  /** The timestamp when the resource was updated. */
  updatedTime?: InputMaybe<DateTimeOperationFilterInput>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version?: InputMaybe<StringOperationFilterInput>;
};

/** Alarm trigger resource definition. */
export type AlarmTriggerSortInput = {
  /** Indicates if acknowledgment is required. */
  acknowledgeRequired?: InputMaybe<SortEnumType>;
  /** The name of the user who added this resource. */
  addedBy?: InputMaybe<SortEnumType>;
  /** The timestamp when the resource was added. */
  addedTime?: InputMaybe<SortEnumType>;
  /** Identifier of the related source component (digital input, video channel, etc.). */
  componentId?: InputMaybe<SortEnumType>;
  /** The name of the user who deleted this resource. */
  deletedBy?: InputMaybe<SortEnumType>;
  /** The timestamp when the resource was deleted. */
  deletedTime?: InputMaybe<SortEnumType>;
  /** Unique event number for legacy recorders. */
  eventNumber?: InputMaybe<SortEnumType>;
  /** Unique identifier of the resource object (GUID string). */
  id?: InputMaybe<SortEnumType>;
  /** Alarm trigger type. */
  kind?: InputMaybe<SortEnumType>;
  /** Identifier of the parent recorder. */
  recorderId?: InputMaybe<SortEnumType>;
  /** The version of the specification which the resource uses. */
  specVersion?: InputMaybe<SortEnumType>;
  /** Alarm trigger tolerance time in seconds. */
  toleranceSeconds?: InputMaybe<SortEnumType>;
  /** The name of the user who updated this resource. */
  updatedBy?: InputMaybe<SortEnumType>;
  /** The timestamp when the resource was updated. */
  updatedTime?: InputMaybe<SortEnumType>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version?: InputMaybe<SortEnumType>;
};

/** The data type for the alarm update. */
export type AlarmUpdateInput = {
  /** Timestamp of when the alarm stopped. */
  endTime?: InputMaybe<Scalars['DateTime']['input']>;
  /** Identifier of the entity to update. */
  id: Scalars['String']['input'];
  /** Timestamp of when the alarm started. */
  startTime?: InputMaybe<Scalars['DateTime']['input']>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version: Scalars['String']['input'];
};

/** Defines when a policy shall be executed. */
export enum ApplyPolicy {
  /** After the resolver was executed. */
  AfterResolver = 'AFTER_RESOLVER',
  /** Before the resolver was executed. */
  BeforeResolver = 'BEFORE_RESOLVER',
  /** The policy is applied in the validation step before the execution. */
  Validation = 'VALIDATION'
}

/** Audio alarm trigger resource definition. */
export type AudioAlarmTrigger = IAlarmTrigger & {
  __typename?: 'AudioAlarmTrigger';
  /** Indicates if acknowledgment is required. */
  acknowledgeRequired: Scalars['Boolean']['output'];
  /** The name of the user who added this resource. */
  addedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was added. */
  addedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Identifier of the related source component (digital input, video channel, etc.). */
  componentId: Scalars['String']['output'];
  /** The name of the user who deleted this resource. */
  deletedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was deleted. */
  deletedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Unique event number for legacy recorders. */
  eventNumber: Scalars['Int']['output'];
  /** Unique identifier of the resource object (GUID string). */
  id: Scalars['String']['output'];
  /** Alarm trigger type. */
  kind: Scalars['String']['output'];
  /** Audio alarm trigger operation. */
  operation: AudioAlarmTriggerOperation;
  /** Identifier of the parent recorder. */
  recorderId: Scalars['String']['output'];
  /** The version of the specification which the resource uses. */
  specVersion: Scalars['String']['output'];
  /** Alarm trigger tolerance time in seconds. */
  toleranceSeconds: Scalars['Int']['output'];
  /** The name of the user who updated this resource. */
  updatedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was updated. */
  updatedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version: Scalars['String']['output'];
};

/** The data type for the audio alarm trigger creation. */
export type AudioAlarmTriggerCreateInput = {
  /** Indicates if acknowledgment is required. */
  acknowledgeRequired: Scalars['Boolean']['input'];
  /** Identifier of the related audio channel. */
  componentId: Scalars['String']['input'];
  /** Audio alarm trigger operation. */
  operation: AudioAlarmTriggerOperation;
  /** Identifier of the parent recorder. */
  recorderId: Scalars['String']['input'];
  /** Alarm trigger tolerance time in seconds. */
  toleranceSeconds: Scalars['Int']['input'];
};

/** The type of the audio alarm trigger operation. */
export enum AudioAlarmTriggerOperation {
  High = 'HIGH',
  Low = 'LOW'
}

/** The data type for the audio alarm trigger update. */
export type AudioAlarmTriggerUpdateInput = {
  /** Indicates if acknowledgment is required. */
  acknowledgeRequired?: InputMaybe<Scalars['Boolean']['input']>;
  /** Identifier of the entity to update. */
  id: Scalars['String']['input'];
  /** Audio alarm trigger operation. */
  operation?: InputMaybe<AudioAlarmTriggerOperation>;
  /** Alarm trigger tolerance time in seconds. */
  toleranceSeconds?: InputMaybe<Scalars['Int']['input']>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version: Scalars['String']['input'];
};

/** Audio recording alarm action resource definition. */
export type AudioRecordingAlarmAction = IAlarmAction & {
  __typename?: 'AudioRecordingAlarmAction';
  /** The name of the user who added this resource. */
  addedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was added. */
  addedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Identifier of the related destination component (digital output, video channel, etc.). */
  componentId: Scalars['String']['output'];
  /** The name of the user who deleted this resource. */
  deletedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was deleted. */
  deletedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Unique identifier of the resource object (GUID string). */
  id: Scalars['String']['output'];
  /** Alarm trigger type. */
  kind: Scalars['String']['output'];
  /** Number of seconds for post-recording (0 - post-recording is disabled). */
  postRecordingSeconds: Scalars['Int']['output'];
  /** Number of seconds for pre-recording (0 - pre-recording is disabled). */
  preRecordingSeconds: Scalars['Int']['output'];
  /** Identifier of the parent recorder. */
  recorderId: Scalars['String']['output'];
  /** Number of seconds to record. */
  recordingSeconds: Scalars['Int']['output'];
  /** The version of the specification which the resource uses. */
  specVersion: Scalars['String']['output'];
  /** The name of the user who updated this resource. */
  updatedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was updated. */
  updatedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version: Scalars['String']['output'];
};

/** The data type for the audio recording alarm action creation. */
export type AudioRecordingAlarmActionCreateInput = {
  /** Identifier of the related audio channel. */
  componentId: Scalars['String']['input'];
  /** Number of seconds for post-recording (0 - post-recording is disabled). */
  postRecordingSeconds: Scalars['Int']['input'];
  /** Number of seconds for pre-recording (0 - pre-recording is disabled). */
  preRecordingSeconds: Scalars['Int']['input'];
  /** Identifier of the parent recorder. */
  recorderId: Scalars['String']['input'];
  /** Number of seconds to record. */
  recordingSeconds: Scalars['Int']['input'];
};

/** The data type for the audio recording alarm action update. */
export type AudioRecordingAlarmActionUpdateInput = {
  /** Identifier of the entity to update. */
  id: Scalars['String']['input'];
  /** Number of seconds for post-recording (0 - post-recording is disabled). */
  postRecordingSeconds?: InputMaybe<Scalars['Int']['input']>;
  /** Number of seconds for pre-recording (0 - pre-recording is disabled). */
  preRecordingSeconds?: InputMaybe<Scalars['Int']['input']>;
  /** Number of seconds to record. */
  recordingSeconds?: InputMaybe<Scalars['Int']['input']>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version: Scalars['String']['input'];
};

export type AuditEventDataOfStringAndString = {
  __typename?: 'AuditEventDataOfStringAndString';
  action: Scalars['String']['output'];
  dataObjects: Array<Scalars['String']['output']>;
  failedObjectIds: Array<Scalars['String']['output']>;
  failedObjects: Array<Scalars['String']['output']>;
  kind: Scalars['String']['output'];
  patchObjects: Array<Scalars['String']['output']>;
  status: AuditOperationStatus;
};

export type AuditEventDataOfStringAndStringFilterInput = {
  action?: InputMaybe<StringOperationFilterInput>;
  and?: InputMaybe<Array<AuditEventDataOfStringAndStringFilterInput>>;
  dataObjects?: InputMaybe<ListStringOperationFilterInput>;
  failedObjectIds?: InputMaybe<ListStringOperationFilterInput>;
  failedObjects?: InputMaybe<ListStringOperationFilterInput>;
  kind?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<AuditEventDataOfStringAndStringFilterInput>>;
  patchObjects?: InputMaybe<ListStringOperationFilterInput>;
  status?: InputMaybe<AuditOperationStatusOperationFilterInput>;
};

export type AuditEventDataOfStringAndStringSortInput = {
  action?: InputMaybe<SortEnumType>;
  kind?: InputMaybe<SortEnumType>;
  status?: InputMaybe<SortEnumType>;
};

/** The enumeration of audit operation statuses. */
export enum AuditOperationStatus {
  Failed = 'FAILED',
  PartiallySuccess = 'PARTIALLY_SUCCESS',
  Success = 'SUCCESS'
}

export type AuditOperationStatusOperationFilterInput = {
  eq?: InputMaybe<AuditOperationStatus>;
  in?: InputMaybe<Array<AuditOperationStatus>>;
  neq?: InputMaybe<AuditOperationStatus>;
  nin?: InputMaybe<Array<AuditOperationStatus>>;
};

export type AuditRecord = {
  __typename?: 'AuditRecord';
  /** Causation event identifier. */
  causationId: Scalars['String']['output'];
  /** Correlation event identifier. */
  correlationId: Scalars['String']['output'];
  data: AuditEventDataOfStringAndString;
  /** Event unique identifier. */
  eventId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  /** Event name. */
  name: Scalars['String']['output'];
  /** Identifies the context in which an event happened. */
  source: Scalars['String']['output'];
  /** The version of the specification which the event uses. */
  specVersion: Scalars['String']['output'];
  /** Describes the subject of the event in the context of the event producer (identified by source). */
  subject: Scalars['String']['output'];
  /** Timestamp of when the occurrence happened. Must adhere to RFC 3339. */
  time: Scalars['DateTime']['output'];
  /** User identifier. */
  user: Scalars['String']['output'];
};

export type AuditRecordFilterInput = {
  and?: InputMaybe<Array<AuditRecordFilterInput>>;
  /** Causation event identifier. */
  causationId?: InputMaybe<StringOperationFilterInput>;
  /** Correlation event identifier. */
  correlationId?: InputMaybe<StringOperationFilterInput>;
  data?: InputMaybe<AuditEventDataOfStringAndStringFilterInput>;
  /** Event unique identifier. */
  eventId?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<StringOperationFilterInput>;
  /** Event name. */
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<AuditRecordFilterInput>>;
  /** Identifies the context in which an event happened. */
  source?: InputMaybe<StringOperationFilterInput>;
  /** The version of the specification which the event uses. */
  specVersion?: InputMaybe<StringOperationFilterInput>;
  /** Describes the subject of the event in the context of the event producer (identified by source). */
  subject?: InputMaybe<StringOperationFilterInput>;
  /** Timestamp of when the occurrence happened. Must adhere to RFC 3339. */
  time?: InputMaybe<DateTimeOperationFilterInput>;
  /** User identifier. */
  user?: InputMaybe<StringOperationFilterInput>;
};

export type AuditRecordSortInput = {
  /** Causation event identifier. */
  causationId?: InputMaybe<SortEnumType>;
  /** Correlation event identifier. */
  correlationId?: InputMaybe<SortEnumType>;
  data?: InputMaybe<AuditEventDataOfStringAndStringSortInput>;
  /** Event unique identifier. */
  eventId?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  /** Event name. */
  name?: InputMaybe<SortEnumType>;
  /** Identifies the context in which an event happened. */
  source?: InputMaybe<SortEnumType>;
  /** The version of the specification which the event uses. */
  specVersion?: InputMaybe<SortEnumType>;
  /** Describes the subject of the event in the context of the event producer (identified by source). */
  subject?: InputMaybe<SortEnumType>;
  /** Timestamp of when the occurrence happened. Must adhere to RFC 3339. */
  time?: InputMaybe<SortEnumType>;
  /** User identifier. */
  user?: InputMaybe<SortEnumType>;
};

/** Enumeration of the stream bitrate modes. */
export enum BitrateMode {
  Cbr = 'CBR',
  Vbr = 'VBR',
  VbrMax = 'VBR_MAX'
}

export type BitrateModeOperationFilterInput = {
  eq?: InputMaybe<BitrateMode>;
  in?: InputMaybe<Array<BitrateMode>>;
  neq?: InputMaybe<BitrateMode>;
  nin?: InputMaybe<Array<BitrateMode>>;
};

export type BooleanOperationFilterInput = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  neq?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Enumeration of the video stream compression formats. */
export enum Compression {
  H264 = 'H264',
  H265 = 'H265',
  Jpeg = 'JPEG',
  Mpeg4 = 'MPEG4',
  Mxpeg = 'MXPEG',
  Undefined = 'UNDEFINED',
  Wmv = 'WMV'
}

export type CompressionOperationFilterInput = {
  eq?: InputMaybe<Compression>;
  in?: InputMaybe<Array<Compression>>;
  neq?: InputMaybe<Compression>;
  nin?: InputMaybe<Array<Compression>>;
};

/** Generic type to store condition. */
export type Condition = {
  __typename?: 'Condition';
  /** Last time the condition transitioned from one status to another. */
  lastTransitionTime?: Maybe<Scalars['DateTime']['output']>;
  /** Human readable message indicating details about the transition. */
  message: Scalars['String']['output'];
  /** Status of the condition, one of Unknown, True, False. */
  status: ConditionStatus;
};

/** Generic type to store condition. */
export type ConditionFilterInput = {
  and?: InputMaybe<Array<ConditionFilterInput>>;
  /** Last time the condition transitioned from one status to another. */
  lastTransitionTime?: InputMaybe<DateTimeOperationFilterInput>;
  /** Human readable message indicating details about the transition. */
  message?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<ConditionFilterInput>>;
  /** Status of the condition, one of Unknown, True, False. */
  status?: InputMaybe<ConditionStatusOperationFilterInput>;
};

/** Generic type to store condition. */
export type ConditionSortInput = {
  /** Last time the condition transitioned from one status to another. */
  lastTransitionTime?: InputMaybe<SortEnumType>;
  /** Human readable message indicating details about the transition. */
  message?: InputMaybe<SortEnumType>;
  /** Status of the condition, one of Unknown, True, False. */
  status?: InputMaybe<SortEnumType>;
};

/** Enumeration of condition statuses. */
export enum ConditionStatus {
  False = 'FALSE',
  True = 'TRUE',
  Unknown = 'UNKNOWN'
}

export type ConditionStatusOperationFilterInput = {
  eq?: InputMaybe<ConditionStatus>;
  in?: InputMaybe<Array<ConditionStatus>>;
  neq?: InputMaybe<ConditionStatus>;
  nin?: InputMaybe<Array<ConditionStatus>>;
};

/** Stream control mode. */
export enum ControlMode {
  Active = 'ACTIVE',
  Passive = 'PASSIVE'
}

export type ControlModeOperationFilterInput = {
  eq?: InputMaybe<ControlMode>;
  in?: InputMaybe<Array<ControlMode>>;
  neq?: InputMaybe<ControlMode>;
  nin?: InputMaybe<Array<ControlMode>>;
};

export type DateTimeOperationFilterInput = {
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  neq?: InputMaybe<Scalars['DateTime']['input']>;
  ngt?: InputMaybe<Scalars['DateTime']['input']>;
  ngte?: InputMaybe<Scalars['DateTime']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  nlt?: InputMaybe<Scalars['DateTime']['input']>;
  nlte?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Template for a Device entity that is used with relation to the DigitalSource entity. */
export type Device = {
  __typename?: 'Device';
  /** The name of the user who added this resource. */
  addedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was added. */
  addedTime?: Maybe<Scalars['DateTime']['output']>;
  /** The name of the user who deleted this resource. */
  deletedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was deleted. */
  deletedTime?: Maybe<Scalars['DateTime']['output']>;
  digitalSources?: Maybe<DigitalSourcesConnection>;
  /** Driver version number. */
  driverVersion: Scalars['String']['output'];
  /** Unique identifier of the resource object (GUID string). */
  id: Scalars['ID']['output'];
  recorder: Recorder;
  /** Identifier of parent recorder. */
  recorderId: Scalars['String']['output'];
  /** Device settings. */
  settings: DeviceSettings;
  /** The version of the specification which the resource uses. */
  specVersion: Scalars['String']['output'];
  /** Device status. */
  status: DeviceStatus;
  /** The name of the user who updated this resource. */
  updatedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was updated. */
  updatedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version: Scalars['String']['output'];
  videoChannels?: Maybe<VideoChannelsConnection>;
  videoStreams?: Maybe<VideoStreamsConnection>;
};


/** Template for a Device entity that is used with relation to the DigitalSource entity. */
export type DeviceDigitalSourcesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<DigitalSourceSortInput>>;
  where?: InputMaybe<DigitalSourceFilterInput>;
};


/** Template for a Device entity that is used with relation to the DigitalSource entity. */
export type DeviceVideoChannelsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<VideoChannelSortInput>>;
  where?: InputMaybe<VideoChannelFilterInput>;
};


/** Template for a Device entity that is used with relation to the DigitalSource entity. */
export type DeviceVideoStreamsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<VideoStreamSortInput>>;
  where?: InputMaybe<VideoStreamFilterInput>;
};

/** The data type for the device creation. */
export type DeviceCreateInput = {
  /** Network address to connect to the device (host IP address or DNS name). */
  address: Scalars['String']['input'];
  /** Resource custom description which is visible for user, optional. */
  description: Scalars['String']['input'];
  /** Driver name which is used to communicate. */
  driverName: Scalars['String']['input'];
  /** Is resource enabled or disabled. */
  enabled: Scalars['Boolean']['input'];
  /** Resource display name which is visible for user. */
  name: Scalars['String']['input'];
  /** Password to the device access. */
  password: Scalars['String']['input'];
  /** Network port to connect to the device. */
  port: Scalars['Int']['input'];
  /** Identifier of parent recorder. */
  recorderId: Scalars['String']['input'];
  /** User name to the device access. */
  userName: Scalars['String']['input'];
};

/** Device resource definition. */
export type DeviceFilterInput = {
  /** The name of the user who added this resource. */
  addedBy?: InputMaybe<StringOperationFilterInput>;
  /** The timestamp when the resource was added. */
  addedTime?: InputMaybe<DateTimeOperationFilterInput>;
  and?: InputMaybe<Array<DeviceFilterInput>>;
  /** The name of the user who deleted this resource. */
  deletedBy?: InputMaybe<StringOperationFilterInput>;
  /** The timestamp when the resource was deleted. */
  deletedTime?: InputMaybe<DateTimeOperationFilterInput>;
  /** Driver version number. */
  driverVersion?: InputMaybe<StringOperationFilterInput>;
  /** Unique identifier of the resource object (GUID string). */
  id?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<DeviceFilterInput>>;
  /** Identifier of parent recorder. */
  recorderId?: InputMaybe<StringOperationFilterInput>;
  /** Device settings. */
  settings?: InputMaybe<DeviceSettingsFilterInput>;
  /** The version of the specification which the resource uses. */
  specVersion?: InputMaybe<StringOperationFilterInput>;
  /** Device status. */
  status?: InputMaybe<DeviceStatusFilterInput>;
  /** The name of the user who updated this resource. */
  updatedBy?: InputMaybe<StringOperationFilterInput>;
  /** The timestamp when the resource was updated. */
  updatedTime?: InputMaybe<DateTimeOperationFilterInput>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version?: InputMaybe<StringOperationFilterInput>;
};

/** Device settings definition. */
export type DeviceSettings = {
  __typename?: 'DeviceSettings';
  /** Network address to connect to the device (host IP address or DNS name). */
  address: Scalars['String']['output'];
  /** Resource custom description which is visible for user, optional. */
  description: Scalars['String']['output'];
  /** Driver name which is used to communicate. */
  driverName: Scalars['String']['output'];
  /** Is resource enabled or disabled. */
  enabled: Scalars['Boolean']['output'];
  /** Resource display name which is visible for user. */
  name: Scalars['String']['output'];
  /** Password to the device access. */
  password: Scalars['String']['output'];
  /** Network port to connect to the device. */
  port: Scalars['Int']['output'];
  /** User name to the device access. */
  userName: Scalars['String']['output'];
};

/** Device settings definition. */
export type DeviceSettingsFilterInput = {
  /** Network address to connect to the device (host IP address or DNS name). */
  address?: InputMaybe<StringOperationFilterInput>;
  and?: InputMaybe<Array<DeviceSettingsFilterInput>>;
  /** Resource custom description which is visible for user, optional. */
  description?: InputMaybe<StringOperationFilterInput>;
  /** Driver name which is used to communicate. */
  driverName?: InputMaybe<StringOperationFilterInput>;
  /** Is resource enabled or disabled. */
  enabled?: InputMaybe<BooleanOperationFilterInput>;
  /** Resource display name which is visible for user. */
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<DeviceSettingsFilterInput>>;
  /** Password to the device access. */
  password?: InputMaybe<StringOperationFilterInput>;
  /** Network port to connect to the device. */
  port?: InputMaybe<IntOperationFilterInput>;
  /** User name to the device access. */
  userName?: InputMaybe<StringOperationFilterInput>;
};

/** Device settings definition. */
export type DeviceSettingsSortInput = {
  /** Network address to connect to the device (host IP address or DNS name). */
  address?: InputMaybe<SortEnumType>;
  /** Resource custom description which is visible for user, optional. */
  description?: InputMaybe<SortEnumType>;
  /** Driver name which is used to communicate. */
  driverName?: InputMaybe<SortEnumType>;
  /** Is resource enabled or disabled. */
  enabled?: InputMaybe<SortEnumType>;
  /** Resource display name which is visible for user. */
  name?: InputMaybe<SortEnumType>;
  /** Password to the device access. */
  password?: InputMaybe<SortEnumType>;
  /** Network port to connect to the device. */
  port?: InputMaybe<SortEnumType>;
  /** User name to the device access. */
  userName?: InputMaybe<SortEnumType>;
};

/** Device resource definition. */
export type DeviceSortInput = {
  /** The name of the user who added this resource. */
  addedBy?: InputMaybe<SortEnumType>;
  /** The timestamp when the resource was added. */
  addedTime?: InputMaybe<SortEnumType>;
  /** The name of the user who deleted this resource. */
  deletedBy?: InputMaybe<SortEnumType>;
  /** The timestamp when the resource was deleted. */
  deletedTime?: InputMaybe<SortEnumType>;
  /** Driver version number. */
  driverVersion?: InputMaybe<SortEnumType>;
  /** Unique identifier of the resource object (GUID string). */
  id?: InputMaybe<SortEnumType>;
  /** Identifier of parent recorder. */
  recorderId?: InputMaybe<SortEnumType>;
  /** Device settings. */
  settings?: InputMaybe<DeviceSettingsSortInput>;
  /** The version of the specification which the resource uses. */
  specVersion?: InputMaybe<SortEnumType>;
  /** Device status. */
  status?: InputMaybe<DeviceStatusSortInput>;
  /** The name of the user who updated this resource. */
  updatedBy?: InputMaybe<SortEnumType>;
  /** The timestamp when the resource was updated. */
  updatedTime?: InputMaybe<SortEnumType>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version?: InputMaybe<SortEnumType>;
};

/** Device status definition. */
export type DeviceStatus = {
  __typename?: 'DeviceStatus';
  /** The adding condition of the device. */
  added: Condition;
  /** The capabilities fetching condition of the device. */
  capabilitiesReceived: Condition;
  /** The configuration condition of the device. */
  configured: Condition;
  /** The connection condition of the device. */
  connected: Condition;
};

/** Device status definition. */
export type DeviceStatusFilterInput = {
  /** The adding condition of the device. */
  added?: InputMaybe<ConditionFilterInput>;
  and?: InputMaybe<Array<DeviceStatusFilterInput>>;
  /** The capabilities fetching condition of the device. */
  capabilitiesReceived?: InputMaybe<ConditionFilterInput>;
  /** The configuration condition of the device. */
  configured?: InputMaybe<ConditionFilterInput>;
  /** The connection condition of the device. */
  connected?: InputMaybe<ConditionFilterInput>;
  or?: InputMaybe<Array<DeviceStatusFilterInput>>;
};

/** Device status definition. */
export type DeviceStatusSortInput = {
  /** The adding condition of the device. */
  added?: InputMaybe<ConditionSortInput>;
  /** The capabilities fetching condition of the device. */
  capabilitiesReceived?: InputMaybe<ConditionSortInput>;
  /** The configuration condition of the device. */
  configured?: InputMaybe<ConditionSortInput>;
  /** The connection condition of the device. */
  connected?: InputMaybe<ConditionSortInput>;
};

export type DeviceUpdateInput = {
  /** Network address to connect to the device (host IP address or DNS name). */
  address?: InputMaybe<Scalars['String']['input']>;
  /** Resource custom description which is visible for user, optional. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Driver name which is used to communicate. */
  driverName?: InputMaybe<Scalars['String']['input']>;
  /** Is resource enabled or disabled. */
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Unique identifier of the resource object (GUID string). */
  id: Scalars['String']['input'];
  /** Resource display name which is visible for user. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Password to the device access. */
  password?: InputMaybe<Scalars['String']['input']>;
  /** Network port to connect to the device. */
  port?: InputMaybe<Scalars['Int']['input']>;
  /** User name to the device access. */
  userName?: InputMaybe<Scalars['String']['input']>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version: Scalars['String']['input'];
};

/** A connection to a list of items. */
export type DevicesConnection = {
  __typename?: 'DevicesConnection';
  /** A list of edges. */
  edges?: Maybe<Array<DevicesEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Maybe<Device>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type DevicesEdge = {
  __typename?: 'DevicesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Device>;
};

/** Digital input alarm trigger resource definition. */
export type DigitalInputAlarmTrigger = IAlarmTrigger & {
  __typename?: 'DigitalInputAlarmTrigger';
  /** Indicates if acknowledgment is required. */
  acknowledgeRequired: Scalars['Boolean']['output'];
  /** The name of the user who added this resource. */
  addedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was added. */
  addedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Identifier of the related source component (digital input, video channel, etc.). */
  componentId: Scalars['String']['output'];
  /** The name of the user who deleted this resource. */
  deletedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was deleted. */
  deletedTime?: Maybe<Scalars['DateTime']['output']>;
  digitalSource: DigitalSource;
  /** Unique event number for legacy recorders. */
  eventNumber: Scalars['Int']['output'];
  /** Unique identifier of the resource object (GUID string). */
  id: Scalars['String']['output'];
  /** Alarm trigger type. */
  kind: Scalars['String']['output'];
  recorder: Recorder;
  /** Identifier of the parent recorder. */
  recorderId: Scalars['String']['output'];
  /** The version of the specification which the resource uses. */
  specVersion: Scalars['String']['output'];
  /** Alarm trigger tolerance time in seconds. */
  toleranceSeconds: Scalars['Int']['output'];
  /** The name of the user who updated this resource. */
  updatedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was updated. */
  updatedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version: Scalars['String']['output'];
};

/** The data type for the digital input alarm trigger creation. */
export type DigitalInputAlarmTriggerCreateInput = {
  /** Indicates if acknowledgment is required. */
  acknowledgeRequired: Scalars['Boolean']['input'];
  /** Identifier of the related digital source (input). */
  componentId: Scalars['String']['input'];
  /** Identifier of the parent recorder. */
  recorderId: Scalars['String']['input'];
  /** Alarm trigger tolerance time in seconds. */
  toleranceSeconds: Scalars['Int']['input'];
};

/** The data type for the digital input alarm trigger update. */
export type DigitalInputAlarmTriggerUpdateInput = {
  /** Indicates if acknowledgment is required. */
  acknowledgeRequired?: InputMaybe<Scalars['Boolean']['input']>;
  /** Identifier of the entity to update. */
  id: Scalars['String']['input'];
  /** Alarm trigger tolerance time in seconds. */
  toleranceSeconds?: InputMaybe<Scalars['Int']['input']>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version: Scalars['String']['input'];
};

/** Digital input profile node resource definition. */
export type DigitalInputNode = IProfileNode & {
  __typename?: 'DigitalInputNode';
  /** The name of the user who added this resource. */
  addedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was added. */
  addedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Identifier of the related alarm configuration. */
  componentId: Scalars['String']['output'];
  /** The name of the user who deleted this resource. */
  deletedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was deleted. */
  deletedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Profile node description which is visible for user, optional. */
  description: Scalars['String']['output'];
  digitalSource: DigitalSource;
  /** The icon set number for the profile node icon. */
  iconSetNumber?: Maybe<Scalars['String']['output']>;
  /** Unique identifier of the resource object (GUID string). */
  id: Scalars['String']['output'];
  /** Profile node type. */
  kind: Scalars['String']['output'];
  /** Profile node name which is visible for user. */
  name: Scalars['String']['output'];
  /** Profile node parent node identifier. */
  parentNodeId?: Maybe<Scalars['String']['output']>;
  /** Indicates the primary action for the digital input node. */
  primaryAction: PrimaryAction;
  profile: Profile;
  /** Profile node profile identifier. */
  profileId: Scalars['String']['output'];
  /** Number of the shortcut. */
  shortcutNumber: Scalars['Int']['output'];
  /** The version of the specification which the resource uses. */
  specVersion: Scalars['String']['output'];
  /** The name of the user who updated this resource. */
  updatedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was updated. */
  updatedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version: Scalars['String']['output'];
};

/** The data type for the digital input profile node creation. */
export type DigitalInputNodeCreateInput = {
  /** Identifier of the related digital input node. */
  componentId: Scalars['String']['input'];
  /** Profile node description which is visible for user, optional. */
  description: Scalars['String']['input'];
  /** The icon set number for the profile node icon. */
  iconSetNumber?: InputMaybe<Scalars['String']['input']>;
  /** Profile node name which is visible for user. */
  name: Scalars['String']['input'];
  /** Profile node parent node identifier. */
  parentNodeId?: InputMaybe<Scalars['String']['input']>;
  /** Indicates the primary action for the digital input node. */
  primaryAction: PrimaryAction;
  /** Profile node profile identifier. */
  profileId: Scalars['String']['input'];
  /** Number of the shortcut. */
  shortcutNumber: Scalars['Int']['input'];
};

export type DigitalInputNodeUpdateInput = {
  /** Profile node description which is visible for user, optional. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The icon set number for the profile node icon. */
  iconSetNumber?: InputMaybe<Scalars['String']['input']>;
  /** Unique identifier of the resource object (GUID string). */
  id: Scalars['String']['input'];
  /** Profile node name which is visible for user. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Profile node parent node identifier. */
  parentNodeId?: InputMaybe<Scalars['String']['input']>;
  /** Indicates the primary action for the digital input node. */
  primaryAction?: InputMaybe<PrimaryAction>;
  /** Number of the shortcut. */
  shortcutNumber?: InputMaybe<Scalars['Int']['input']>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version: Scalars['String']['input'];
};

/** A connection to a list of items. */
export type DigitalInputNodesConnection = {
  __typename?: 'DigitalInputNodesConnection';
  /** A list of edges. */
  edges?: Maybe<Array<DigitalInputNodesEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Maybe<DigitalInputNode>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type DigitalInputNodesEdge = {
  __typename?: 'DigitalInputNodesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<DigitalInputNode>;
};

/** Digital output alarm action resource definition. */
export type DigitalOutputAlarmAction = IAlarmAction & {
  __typename?: 'DigitalOutputAlarmAction';
  /** The name of the user who added this resource. */
  addedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was added. */
  addedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Identifier of the related destination component (digital output, video channel, etc.). */
  componentId: Scalars['String']['output'];
  /** Number of seconds to delay output deactivation (0 - deactivate output when alarm was ended, N - deactivate output N seconds after alarm was ended). */
  deactivateDelaySeconds: Scalars['Int']['output'];
  /** The name of the user who deleted this resource. */
  deletedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was deleted. */
  deletedTime?: Maybe<Scalars['DateTime']['output']>;
  digitalSource: DigitalSource;
  /** Unique identifier of the resource object (GUID string). */
  id: Scalars['String']['output'];
  /** Alarm trigger type. */
  kind: Scalars['String']['output'];
  recorder: Recorder;
  /** Identifier of the parent recorder. */
  recorderId: Scalars['String']['output'];
  /** The version of the specification which the resource uses. */
  specVersion: Scalars['String']['output'];
  /** The name of the user who updated this resource. */
  updatedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was updated. */
  updatedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version: Scalars['String']['output'];
};

/** The data type for the digital output alarm action creation. */
export type DigitalOutputAlarmActionCreateInput = {
  /** Identifier of the related digital source (output). */
  componentId: Scalars['String']['input'];
  /** Number of seconds to delay output deactivation (0 - deactivate output when alarm was ended, N - deactivate output N seconds after alarm was ended). */
  deactivateDelaySeconds: Scalars['Int']['input'];
  /** Identifier of the parent recorder. */
  recorderId: Scalars['String']['input'];
};

/** The data type for the digital output alarm action update. */
export type DigitalOutputAlarmActionUpdateInput = {
  /** Number of seconds to delay output deactivation (0 - deactivate output when alarm was ended, N - deactivate output N seconds after alarm was ended). */
  deactivateDelaySeconds?: InputMaybe<Scalars['Int']['input']>;
  /** Identifier of the entity to update. */
  id: Scalars['String']['input'];
  /** Version of resource object, is used for optimistic concurrency control. */
  version: Scalars['String']['input'];
};

/** Digital output profile node resource definition. */
export type DigitalOutputNode = IProfileNode & {
  __typename?: 'DigitalOutputNode';
  /** The name of the user who added this resource. */
  addedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was added. */
  addedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Identifier of the related alarm configuration. */
  componentId: Scalars['String']['output'];
  /** The name of the user who deleted this resource. */
  deletedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was deleted. */
  deletedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Profile node description which is visible for user, optional. */
  description: Scalars['String']['output'];
  digitalSource: DigitalSource;
  /** The icon set number for the profile node icon. */
  iconSetNumber?: Maybe<Scalars['String']['output']>;
  /** Unique identifier of the resource object (GUID string). */
  id: Scalars['String']['output'];
  /** Profile node type. */
  kind: Scalars['String']['output'];
  /** Profile node name which is visible for user. */
  name: Scalars['String']['output'];
  /** Profile node parent node identifier. */
  parentNodeId?: Maybe<Scalars['String']['output']>;
  /** Indicates the primary action for the digital output node. */
  primaryAction: PrimaryAction;
  profile: Profile;
  /** Profile node profile identifier. */
  profileId: Scalars['String']['output'];
  /** Indicated the pulse value. */
  pulseTime?: Maybe<Scalars['DateTime']['output']>;
  /** Number of the shortcut. */
  shortcutNumber: Scalars['Int']['output'];
  /** The version of the specification which the resource uses. */
  specVersion: Scalars['String']['output'];
  /** The name of the user who updated this resource. */
  updatedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was updated. */
  updatedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version: Scalars['String']['output'];
};

/** The data type for the digital output profile node creation. */
export type DigitalOutputNodeCreateInput = {
  /** Identifier of the related digital output node. */
  componentId: Scalars['String']['input'];
  /** Profile node description which is visible for user, optional. */
  description: Scalars['String']['input'];
  /** The icon set number for the profile node icon. */
  iconSetNumber?: InputMaybe<Scalars['String']['input']>;
  /** Profile node name which is visible for user. */
  name: Scalars['String']['input'];
  /** Profile node parent node identifier. */
  parentNodeId?: InputMaybe<Scalars['String']['input']>;
  /** Indicates the primary action for the digital output node. */
  primaryAction: PrimaryAction;
  /** Profile node profile identifier. */
  profileId: Scalars['String']['input'];
  /** Indicated the pulse value. */
  pulseTime?: InputMaybe<Scalars['DateTime']['input']>;
  /** Number of the shortcut. */
  shortcutNumber: Scalars['Int']['input'];
};

export type DigitalOutputNodeUpdateInput = {
  /** Profile node description which is visible for user, optional. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The icon set number for the profile node icon. */
  iconSetNumber?: InputMaybe<Scalars['String']['input']>;
  /** Unique identifier of the resource object (GUID string). */
  id: Scalars['String']['input'];
  /** Profile node name which is visible for user. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Profile node parent node identifier. */
  parentNodeId?: InputMaybe<Scalars['String']['input']>;
  /** Indicates the primary action for the digital output node. */
  primaryAction?: InputMaybe<PrimaryAction>;
  /** Indicated the pulse value. */
  pulseTime?: InputMaybe<Scalars['DateTime']['input']>;
  /** Number of the shortcut. */
  shortcutNumber?: InputMaybe<Scalars['Int']['input']>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version: Scalars['String']['input'];
};

/** A connection to a list of items. */
export type DigitalOutputNodesConnection = {
  __typename?: 'DigitalOutputNodesConnection';
  /** A list of edges. */
  edges?: Maybe<Array<DigitalOutputNodesEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Maybe<DigitalOutputNode>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type DigitalOutputNodesEdge = {
  __typename?: 'DigitalOutputNodesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<DigitalOutputNode>;
};

/** Template for a DigitalSource entity that is used with relation to the DigitalInputNode and DigitalOutputNode entiies. */
export type DigitalSource = {
  __typename?: 'DigitalSource';
  /** The name of the user who added this resource. */
  addedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was added. */
  addedTime?: Maybe<Scalars['DateTime']['output']>;
  /** The name of the user who deleted this resource. */
  deletedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was deleted. */
  deletedTime?: Maybe<Scalars['DateTime']['output']>;
  device: Device;
  /** Identifier of parent device. */
  deviceId: Scalars['String']['output'];
  digitalInputNodes?: Maybe<DigitalInputNodesConnection>;
  digitalOutputNodes?: Maybe<DigitalOutputNodesConnection>;
  /** Unique identifier of the resource object (GUID string). */
  id: Scalars['ID']['output'];
  recorder: Recorder;
  /** Identifier of the parent recorder. */
  recorderId: Scalars['String']['output'];
  /** Digital source settings (parameters that are currently chosen by client). */
  settings: DigitalSourceSettings;
  /** The version of the specification which the resource uses. */
  specVersion: Scalars['String']['output'];
  /** Digital source status (parameters that can be modified outside by client). */
  status: DigitalSourceStatus;
  /** Indicates digital source type (input/output). */
  type: DigitalSourceType;
  /** The name of the user who updated this resource. */
  updatedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was updated. */
  updatedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version: Scalars['String']['output'];
};


/** Template for a DigitalSource entity that is used with relation to the DigitalInputNode and DigitalOutputNode entiies. */
export type DigitalSourceDigitalInputNodesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<ProfileNodeSortInput>>;
  where?: InputMaybe<ProfileNodeFilterInput>;
};


/** Template for a DigitalSource entity that is used with relation to the DigitalInputNode and DigitalOutputNode entiies. */
export type DigitalSourceDigitalOutputNodesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<ProfileNodeSortInput>>;
  where?: InputMaybe<ProfileNodeFilterInput>;
};

/** The data type for the digital source creation. */
export type DigitalSourceCreateInput = {
  /** Resource custom description which is visible for user, optional. */
  description: Scalars['String']['input'];
  /** Identifier of parent device. */
  deviceId: Scalars['String']['input'];
  /** Is resource enabled or disabled. */
  enabled: Scalars['Boolean']['input'];
  /** Resource display name which is visible for user. */
  name: Scalars['String']['input'];
  /** The digital source polarity (opened or closed). */
  polarity: DigitalSourcePolarity;
  /** Identifier of the parent recorder. */
  recorderId: Scalars['String']['input'];
  /** Indicates digital source type (input/output). */
  type: DigitalSourceType;
};

/** Digital source resource definition. */
export type DigitalSourceFilterInput = {
  /** The name of the user who added this resource. */
  addedBy?: InputMaybe<StringOperationFilterInput>;
  /** The timestamp when the resource was added. */
  addedTime?: InputMaybe<DateTimeOperationFilterInput>;
  and?: InputMaybe<Array<DigitalSourceFilterInput>>;
  /** The name of the user who deleted this resource. */
  deletedBy?: InputMaybe<StringOperationFilterInput>;
  /** The timestamp when the resource was deleted. */
  deletedTime?: InputMaybe<DateTimeOperationFilterInput>;
  /** Identifier of parent device. */
  deviceId?: InputMaybe<StringOperationFilterInput>;
  /** Unique identifier of the resource object (GUID string). */
  id?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<DigitalSourceFilterInput>>;
  /** Identifier of the parent recorder. */
  recorderId?: InputMaybe<StringOperationFilterInput>;
  /** Digital source settings (parameters that are currently chosen by client). */
  settings?: InputMaybe<DigitalSourceSettingsFilterInput>;
  /** The version of the specification which the resource uses. */
  specVersion?: InputMaybe<StringOperationFilterInput>;
  /** Digital source status (parameters that can be modified outside by client). */
  status?: InputMaybe<DigitalSourceStatusFilterInput>;
  /** Indicates digital source type (input/output). */
  type?: InputMaybe<DigitalSourceTypeOperationFilterInput>;
  /** The name of the user who updated this resource. */
  updatedBy?: InputMaybe<StringOperationFilterInput>;
  /** The timestamp when the resource was updated. */
  updatedTime?: InputMaybe<DateTimeOperationFilterInput>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version?: InputMaybe<StringOperationFilterInput>;
};

/** The enumeration for the digital source polarity. */
export enum DigitalSourcePolarity {
  Closed = 'CLOSED',
  Opened = 'OPENED'
}

export type DigitalSourcePolarityOperationFilterInput = {
  eq?: InputMaybe<DigitalSourcePolarity>;
  in?: InputMaybe<Array<DigitalSourcePolarity>>;
  neq?: InputMaybe<DigitalSourcePolarity>;
  nin?: InputMaybe<Array<DigitalSourcePolarity>>;
};

/** Digital source settings definition. */
export type DigitalSourceSettings = {
  __typename?: 'DigitalSourceSettings';
  /** Resource custom description which is visible for user, optional. */
  description: Scalars['String']['output'];
  /** Is resource enabled or disabled. */
  enabled: Scalars['Boolean']['output'];
  /** Resource display name which is visible for user. */
  name: Scalars['String']['output'];
  /** The digital source polarity (opened or closed). */
  polarity: DigitalSourcePolarity;
};

/** Digital source settings definition. */
export type DigitalSourceSettingsFilterInput = {
  and?: InputMaybe<Array<DigitalSourceSettingsFilterInput>>;
  /** Resource custom description which is visible for user, optional. */
  description?: InputMaybe<StringOperationFilterInput>;
  /** Is resource enabled or disabled. */
  enabled?: InputMaybe<BooleanOperationFilterInput>;
  /** Resource display name which is visible for user. */
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<DigitalSourceSettingsFilterInput>>;
  /** The digital source polarity (opened or closed). */
  polarity?: InputMaybe<DigitalSourcePolarityOperationFilterInput>;
};

/** Digital source settings definition. */
export type DigitalSourceSettingsSortInput = {
  /** Resource custom description which is visible for user, optional. */
  description?: InputMaybe<SortEnumType>;
  /** Is resource enabled or disabled. */
  enabled?: InputMaybe<SortEnumType>;
  /** Resource display name which is visible for user. */
  name?: InputMaybe<SortEnumType>;
  /** The digital source polarity (opened or closed). */
  polarity?: InputMaybe<SortEnumType>;
};

/** Digital source resource definition. */
export type DigitalSourceSortInput = {
  /** The name of the user who added this resource. */
  addedBy?: InputMaybe<SortEnumType>;
  /** The timestamp when the resource was added. */
  addedTime?: InputMaybe<SortEnumType>;
  /** The name of the user who deleted this resource. */
  deletedBy?: InputMaybe<SortEnumType>;
  /** The timestamp when the resource was deleted. */
  deletedTime?: InputMaybe<SortEnumType>;
  /** Identifier of parent device. */
  deviceId?: InputMaybe<SortEnumType>;
  /** Unique identifier of the resource object (GUID string). */
  id?: InputMaybe<SortEnumType>;
  /** Identifier of the parent recorder. */
  recorderId?: InputMaybe<SortEnumType>;
  /** Digital source settings (parameters that are currently chosen by client). */
  settings?: InputMaybe<DigitalSourceSettingsSortInput>;
  /** The version of the specification which the resource uses. */
  specVersion?: InputMaybe<SortEnumType>;
  /** Digital source status (parameters that can be modified outside by client). */
  status?: InputMaybe<DigitalSourceStatusSortInput>;
  /** Indicates digital source type (input/output). */
  type?: InputMaybe<SortEnumType>;
  /** The name of the user who updated this resource. */
  updatedBy?: InputMaybe<SortEnumType>;
  /** The timestamp when the resource was updated. */
  updatedTime?: InputMaybe<SortEnumType>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version?: InputMaybe<SortEnumType>;
};

/** The enumeration for the digital source state. */
export enum DigitalSourceState {
  Closed = 'CLOSED',
  Open = 'OPEN',
  Unknown = 'UNKNOWN'
}

export type DigitalSourceStateOperationFilterInput = {
  eq?: InputMaybe<DigitalSourceState>;
  in?: InputMaybe<Array<DigitalSourceState>>;
  neq?: InputMaybe<DigitalSourceState>;
  nin?: InputMaybe<Array<DigitalSourceState>>;
};

/** Digital source status definition. */
export type DigitalSourceStatus = {
  __typename?: 'DigitalSourceStatus';
  /** The configuration condition of the digital source. */
  configured: Condition;
  /** The connection condition of the digital source. */
  connected: Condition;
  /** The current state of the digital source. */
  deviceState: DigitalSourceState;
};

/** Digital source status definition. */
export type DigitalSourceStatusFilterInput = {
  and?: InputMaybe<Array<DigitalSourceStatusFilterInput>>;
  /** The configuration condition of the digital source. */
  configured?: InputMaybe<ConditionFilterInput>;
  /** The connection condition of the digital source. */
  connected?: InputMaybe<ConditionFilterInput>;
  /** The current state of the digital source. */
  deviceState?: InputMaybe<DigitalSourceStateOperationFilterInput>;
  or?: InputMaybe<Array<DigitalSourceStatusFilterInput>>;
};

/** Digital source status definition. */
export type DigitalSourceStatusSortInput = {
  /** The configuration condition of the digital source. */
  configured?: InputMaybe<ConditionSortInput>;
  /** The connection condition of the digital source. */
  connected?: InputMaybe<ConditionSortInput>;
  /** The current state of the digital source. */
  deviceState?: InputMaybe<SortEnumType>;
};

/** The enumeration for the digital source type. */
export enum DigitalSourceType {
  Input = 'INPUT',
  Output = 'OUTPUT'
}

export type DigitalSourceTypeOperationFilterInput = {
  eq?: InputMaybe<DigitalSourceType>;
  in?: InputMaybe<Array<DigitalSourceType>>;
  neq?: InputMaybe<DigitalSourceType>;
  nin?: InputMaybe<Array<DigitalSourceType>>;
};

export type DigitalSourceUpdateInput = {
  /** Resource custom description which is visible for user, optional. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Is resource enabled or disabled. */
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Unique identifier of the resource object (GUID string). */
  id: Scalars['String']['input'];
  /** Resource display name which is visible for user. */
  name?: InputMaybe<Scalars['String']['input']>;
  polarity?: InputMaybe<DigitalSourcePolarity>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version: Scalars['String']['input'];
};

/** A connection to a list of items. */
export type DigitalSourcesConnection = {
  __typename?: 'DigitalSourcesConnection';
  /** A list of edges. */
  edges?: Maybe<Array<DigitalSourcesEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Maybe<DigitalSource>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type DigitalSourcesEdge = {
  __typename?: 'DigitalSourcesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<DigitalSource>;
};

/** Disable alarms alarm action resource definition. */
export type DisableAlarmsAlarmAction = IAlarmAction & {
  __typename?: 'DisableAlarmsAlarmAction';
  /** The name of the user who added this resource. */
  addedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was added. */
  addedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Identifier of the related destination component (digital output, video channel, etc.). */
  componentId: Scalars['String']['output'];
  /** The name of the user who deleted this resource. */
  deletedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was deleted. */
  deletedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Unique identifier of the resource object (GUID string). */
  id: Scalars['String']['output'];
  /** Alarm trigger type. */
  kind: Scalars['String']['output'];
  /** Priority level for alarms disabling. */
  priority: AlarmPriority;
  /** Identifier of the parent recorder. */
  recorderId: Scalars['String']['output'];
  /** The version of the specification which the resource uses. */
  specVersion: Scalars['String']['output'];
  /** The name of the user who updated this resource. */
  updatedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was updated. */
  updatedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version: Scalars['String']['output'];
};

/** The data type for the disable alarms alarm action creation. */
export type DisableAlarmsAlarmActionCreateInput = {
  /** Priority level for alarms disabling. */
  priority: AlarmPriority;
  /** Identifier of the parent recorder. */
  recorderId: Scalars['String']['input'];
};

/** The data type for the disable alarms alarm action update. */
export type DisableAlarmsAlarmActionUpdateInput = {
  /** Identifier of the entity to update. */
  id: Scalars['String']['input'];
  /** Priority level for alarms disabling. */
  priority?: InputMaybe<AlarmPriority>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version: Scalars['String']['input'];
};

/** Disable client zones alarm action resource definition. */
export type DisableClientZonesAlarmAction = IAlarmAction & {
  __typename?: 'DisableClientZonesAlarmAction';
  /** The name of the user who added this resource. */
  addedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was added. */
  addedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Identifier of the related destination component (digital output, video channel, etc.). */
  componentId: Scalars['String']['output'];
  /** The name of the user who deleted this resource. */
  deletedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was deleted. */
  deletedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Unique identifier of the resource object (GUID string). */
  id: Scalars['String']['output'];
  /** Alarm trigger type. */
  kind: Scalars['String']['output'];
  recorder: Recorder;
  /** Identifier of the parent recorder. */
  recorderId: Scalars['String']['output'];
  /** The version of the specification which the resource uses. */
  specVersion: Scalars['String']['output'];
  /** The name of the user who updated this resource. */
  updatedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was updated. */
  updatedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version: Scalars['String']['output'];
  videoChannel: VideoChannel;
  /** The client zone type. */
  zoneType: DisableClientZonesAlarmType;
};

/** The data type for the disable client zones alarm action creation. */
export type DisableClientZonesAlarmActionCreateInput = {
  /** Identifier of the related video channel. */
  componentId: Scalars['String']['input'];
  /** Identifier of the parent recorder. */
  recorderId: Scalars['String']['input'];
  /** The client zone type. */
  zoneType: DisableClientZonesAlarmType;
};

/** The data type for the disable client zones alarm action update. */
export type DisableClientZonesAlarmActionUpdateInput = {
  /** Identifier of the entity to update. */
  id: Scalars['String']['input'];
  /** Version of resource object, is used for optimistic concurrency control. */
  version: Scalars['String']['input'];
  /** The client zone type. */
  zoneType?: InputMaybe<DisableClientZonesAlarmType>;
};

/** Enumeration of the client zone types. */
export enum DisableClientZonesAlarmType {
  Blurring = 'BLURRING',
  PrivacyMask = 'PRIVACY_MASK'
}

/** Email alarm action resource definition. */
export type EmailAlarmAction = IAlarmAction & {
  __typename?: 'EmailAlarmAction';
  /** The name of the user who added this resource. */
  addedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was added. */
  addedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Number of seconds after alarm for attaching images. */
  afterAlarmSeconds: Scalars['Int']['output'];
  /** Number of seconds before alarm for attaching images. */
  beforeAlarmSeconds: Scalars['Int']['output'];
  /** Identifier of the related destination component (digital output, video channel, etc.). */
  componentId: Scalars['String']['output'];
  /** The name of the user who deleted this resource. */
  deletedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was deleted. */
  deletedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Unique identifier of the resource object (GUID string). */
  id: Scalars['String']['output'];
  /** Attached image size limit. */
  imageSizeLimit: EmailAlarmActionImageSizeLimit;
  /** Attach or not images to email. */
  isImageAttached: Scalars['Boolean']['output'];
  /** Use long format for the email. */
  isLongFormat: Scalars['Boolean']['output'];
  /** Alarm trigger type. */
  kind: Scalars['String']['output'];
  /** Email message. */
  message: Scalars['String']['output'];
  /** Number of images to attach to email. */
  numberOfImages: Scalars['Int']['output'];
  recorder: Recorder;
  /** Identifier of the parent recorder. */
  recorderId: Scalars['String']['output'];
  /** The version of the specification which the resource uses. */
  specVersion: Scalars['String']['output'];
  /** The name of the user who updated this resource. */
  updatedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was updated. */
  updatedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version: Scalars['String']['output'];
  videoChannel: VideoChannel;
};

/** The data type for the email alarm action creation. */
export type EmailAlarmActionCreateInput = {
  /** Number of seconds after alarm for attaching images. */
  afterAlarmSeconds: Scalars['Int']['input'];
  /** Number of seconds before alarm for attaching images. */
  beforeAlarmSeconds: Scalars['Int']['input'];
  /** Identifier of the related video channel (if images are attached). */
  componentId?: InputMaybe<Scalars['String']['input']>;
  /** Attached image size limit. */
  imageSizeLimit: EmailAlarmActionImageSizeLimit;
  /** Attach or not images to email. */
  isImageAttached: Scalars['Boolean']['input'];
  /** Use long format for the email. */
  isLongFormat: Scalars['Boolean']['input'];
  /** Email message. */
  message: Scalars['String']['input'];
  /** Number of images to attach to email. */
  numberOfImages: Scalars['Int']['input'];
  /** Identifier of the parent recorder. */
  recorderId: Scalars['String']['input'];
};

/** Enumeration of the image size limit for the email alarm action. */
export enum EmailAlarmActionImageSizeLimit {
  LargeDesktop = 'LARGE_DESKTOP',
  Minimum = 'MINIMUM',
  Mobile = 'MOBILE',
  Original = 'ORIGINAL',
  SmallDesktop = 'SMALL_DESKTOP'
}

/** The data type for the email alarm action update. */
export type EmailAlarmActionUpdateInput = {
  /** Number of seconds after alarm for attaching images. */
  afterAlarmSeconds?: InputMaybe<Scalars['Int']['input']>;
  /** Number of seconds before alarm for attaching images. */
  beforeAlarmSeconds?: InputMaybe<Scalars['Int']['input']>;
  /** Identifier of the entity to update. */
  id: Scalars['String']['input'];
  /** Attached image size limit. */
  imageSizeLimit?: InputMaybe<EmailAlarmActionImageSizeLimit>;
  /** Attach or not images to email. */
  isImageAttached?: InputMaybe<Scalars['Boolean']['input']>;
  /** Use long format for the email. */
  isLongFormat?: InputMaybe<Scalars['Boolean']['input']>;
  /** Email message. */
  message?: InputMaybe<Scalars['String']['input']>;
  /** Number of images to attach to email. */
  numberOfImages?: InputMaybe<Scalars['Int']['input']>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version: Scalars['String']['input'];
};

/** External alarm trigger resource definition. */
export type ExternalAlarmTrigger = IAlarmTrigger & {
  __typename?: 'ExternalAlarmTrigger';
  /** Indicates if acknowledgment is required. */
  acknowledgeRequired: Scalars['Boolean']['output'];
  /** The name of the user who added this resource. */
  addedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was added. */
  addedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Identifier of the related source component (digital input, video channel, etc.). */
  componentId: Scalars['String']['output'];
  /** The name of the user who deleted this resource. */
  deletedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was deleted. */
  deletedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Unique event number for legacy recorders. */
  eventNumber: Scalars['Int']['output'];
  /** External trigger channel. */
  externalTriggerChannel: Scalars['Int']['output'];
  /** Unique identifier of the resource object (GUID string). */
  id: Scalars['String']['output'];
  /** Alarm trigger type. */
  kind: Scalars['String']['output'];
  /** Identifier of the parent recorder. */
  recorderId: Scalars['String']['output'];
  /** The version of the specification which the resource uses. */
  specVersion: Scalars['String']['output'];
  /** Alarm trigger tolerance time in seconds. */
  toleranceSeconds: Scalars['Int']['output'];
  /** External trigger type. */
  triggerType: ExternalAlarmTriggerType;
  /** The name of the user who updated this resource. */
  updatedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was updated. */
  updatedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version: Scalars['String']['output'];
};

/** The data type for the external alarm trigger creation. */
export type ExternalAlarmTriggerCreateInput = {
  /** Indicates if acknowledgment is required. */
  acknowledgeRequired: Scalars['Boolean']['input'];
  /** External trigger channel. */
  externalTriggerChannel: Scalars['Int']['input'];
  /** Identifier of the parent recorder. */
  recorderId: Scalars['String']['input'];
  /** Alarm trigger tolerance time in seconds. */
  toleranceSeconds: Scalars['Int']['input'];
  /** External trigger type. */
  triggerType: ExternalAlarmTriggerType;
};

/** The type of the external trigger. */
export enum ExternalAlarmTriggerType {
  Channel = 'CHANNEL',
  Generic = 'GENERIC'
}

/** The data type for the external alarm trigger update. */
export type ExternalAlarmTriggerUpdateInput = {
  /** Indicates if acknowledgment is required. */
  acknowledgeRequired?: InputMaybe<Scalars['Boolean']['input']>;
  /** External trigger channel. */
  externalTriggerChannel?: InputMaybe<Scalars['Int']['input']>;
  /** Identifier of the entity to update. */
  id: Scalars['String']['input'];
  /** Alarm trigger tolerance time in seconds. */
  toleranceSeconds?: InputMaybe<Scalars['Int']['input']>;
  /** External trigger type. */
  triggerType?: InputMaybe<ExternalAlarmTriggerType>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version: Scalars['String']['input'];
};

/** Folder profile node resource definition. */
export type FolderNode = IProfileNode & {
  __typename?: 'FolderNode';
  /** The name of the user who added this resource. */
  addedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was added. */
  addedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Identifier of the related alarm configuration. */
  componentId: Scalars['String']['output'];
  /** The name of the user who deleted this resource. */
  deletedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was deleted. */
  deletedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Profile node description which is visible for user, optional. */
  description: Scalars['String']['output'];
  /** The icon set number for the profile node icon. */
  iconSetNumber?: Maybe<Scalars['String']['output']>;
  /** Unique identifier of the resource object (GUID string). */
  id: Scalars['String']['output'];
  /** Profile node type. */
  kind: Scalars['String']['output'];
  /** Profile node name which is visible for user. */
  name: Scalars['String']['output'];
  /** Profile node parent node identifier. */
  parentNodeId?: Maybe<Scalars['String']['output']>;
  profile: Profile;
  /** Profile node profile identifier. */
  profileId: Scalars['String']['output'];
  /** The version of the specification which the resource uses. */
  specVersion: Scalars['String']['output'];
  /** The name of the user who updated this resource. */
  updatedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was updated. */
  updatedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version: Scalars['String']['output'];
};

/** The data type for the folder profile node creation. */
export type FolderNodeCreateInput = {
  /** Profile node description which is visible for user, optional. */
  description: Scalars['String']['input'];
  /** The icon set number for the profile node icon. */
  iconSetNumber?: InputMaybe<Scalars['String']['input']>;
  /** Profile node name which is visible for user. */
  name: Scalars['String']['input'];
  /** Profile node parent node identifier. */
  parentNodeId?: InputMaybe<Scalars['String']['input']>;
  /** Profile node profile identifier. */
  profileId: Scalars['String']['input'];
};

export type FolderNodeUpdateInput = {
  /** Profile node description which is visible for user, optional. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The icon set number for the profile node icon. */
  iconSetNumber?: InputMaybe<Scalars['String']['input']>;
  /** Unique identifier of the resource object (GUID string). */
  id: Scalars['String']['input'];
  /** Profile node name which is visible for user. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Profile node parent node identifier. */
  parentNodeId?: InputMaybe<Scalars['String']['input']>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version: Scalars['String']['input'];
};

/** Alarm action resource definition. */
export type IAlarmAction = {
  /** The name of the user who added this resource. */
  addedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was added. */
  addedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Identifier of the related destination component (digital output, video channel, etc.). */
  componentId: Scalars['String']['output'];
  /** The name of the user who deleted this resource. */
  deletedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was deleted. */
  deletedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Unique identifier of the resource object (GUID string). */
  id: Scalars['String']['output'];
  /** Alarm trigger type. */
  kind: Scalars['String']['output'];
  /** Identifier of the parent recorder. */
  recorderId: Scalars['String']['output'];
  /** The version of the specification which the resource uses. */
  specVersion: Scalars['String']['output'];
  /** The name of the user who updated this resource. */
  updatedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was updated. */
  updatedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version: Scalars['String']['output'];
};

/** Alarm trigger resource definition. */
export type IAlarmTrigger = {
  /** Indicates if acknowledgment is required. */
  acknowledgeRequired: Scalars['Boolean']['output'];
  /** The name of the user who added this resource. */
  addedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was added. */
  addedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Identifier of the related source component (digital input, video channel, etc.). */
  componentId: Scalars['String']['output'];
  /** The name of the user who deleted this resource. */
  deletedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was deleted. */
  deletedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Unique event number for legacy recorders. */
  eventNumber: Scalars['Int']['output'];
  /** Unique identifier of the resource object (GUID string). */
  id: Scalars['String']['output'];
  /** Alarm trigger type. */
  kind: Scalars['String']['output'];
  /** Identifier of the parent recorder. */
  recorderId: Scalars['String']['output'];
  /** The version of the specification which the resource uses. */
  specVersion: Scalars['String']['output'];
  /** Alarm trigger tolerance time in seconds. */
  toleranceSeconds: Scalars['Int']['output'];
  /** The name of the user who updated this resource. */
  updatedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was updated. */
  updatedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version: Scalars['String']['output'];
};

/** Profile node resource definition. */
export type IProfileNode = {
  /** The name of the user who added this resource. */
  addedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was added. */
  addedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Identifier of the related alarm configuration. */
  componentId: Scalars['String']['output'];
  /** The name of the user who deleted this resource. */
  deletedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was deleted. */
  deletedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Profile node description which is visible for user, optional. */
  description: Scalars['String']['output'];
  /** The icon set number for the profile node icon. */
  iconSetNumber?: Maybe<Scalars['String']['output']>;
  /** Unique identifier of the resource object (GUID string). */
  id: Scalars['String']['output'];
  /** Profile node type. */
  kind: Scalars['String']['output'];
  /** Profile node name which is visible for user. */
  name: Scalars['String']['output'];
  /** Profile node parent node identifier. */
  parentNodeId?: Maybe<Scalars['String']['output']>;
  /** Profile node profile identifier. */
  profileId: Scalars['String']['output'];
  /** The version of the specification which the resource uses. */
  specVersion: Scalars['String']['output'];
  /** The name of the user who updated this resource. */
  updatedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was updated. */
  updatedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version: Scalars['String']['output'];
};

export type IntOperationFilterInput = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
  ngt?: InputMaybe<Scalars['Int']['input']>;
  ngte?: InputMaybe<Scalars['Int']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  nlt?: InputMaybe<Scalars['Int']['input']>;
  nlte?: InputMaybe<Scalars['Int']['input']>;
};

/** A connection to a list of items. */
export type ListAlarmActionsConnection = {
  __typename?: 'ListAlarmActionsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ListAlarmActionsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<IAlarmAction>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ListAlarmActionsEdge = {
  __typename?: 'ListAlarmActionsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: IAlarmAction;
};

/** A connection to a list of items. */
export type ListAlarmConfigurationsConnection = {
  __typename?: 'ListAlarmConfigurationsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ListAlarmConfigurationsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<AlarmConfiguration>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ListAlarmConfigurationsEdge = {
  __typename?: 'ListAlarmConfigurationsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: AlarmConfiguration;
};

/** A connection to a list of items. */
export type ListAlarmTriggersConnection = {
  __typename?: 'ListAlarmTriggersConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ListAlarmTriggersEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<IAlarmTrigger>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ListAlarmTriggersEdge = {
  __typename?: 'ListAlarmTriggersEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: IAlarmTrigger;
};

/** A connection to a list of items. */
export type ListAlarmsByConfigurationIdsConnection = {
  __typename?: 'ListAlarmsByConfigurationIdsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ListAlarmsByConfigurationIdsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Alarm>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ListAlarmsByConfigurationIdsEdge = {
  __typename?: 'ListAlarmsByConfigurationIdsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Alarm;
};

/** A connection to a list of items. */
export type ListAlarmsConnection = {
  __typename?: 'ListAlarmsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ListAlarmsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Alarm>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ListAlarmsEdge = {
  __typename?: 'ListAlarmsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Alarm;
};

/** A connection to a list of items. */
export type ListAuditRecordsConnection = {
  __typename?: 'ListAuditRecordsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ListAuditRecordsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<AuditRecord>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ListAuditRecordsEdge = {
  __typename?: 'ListAuditRecordsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: AuditRecord;
};

/** A connection to a list of items. */
export type ListDevicesConnection = {
  __typename?: 'ListDevicesConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ListDevicesEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Device>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ListDevicesEdge = {
  __typename?: 'ListDevicesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Device;
};

/** A connection to a list of items. */
export type ListDigitalSourcesConnection = {
  __typename?: 'ListDigitalSourcesConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ListDigitalSourcesEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<DigitalSource>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ListDigitalSourcesEdge = {
  __typename?: 'ListDigitalSourcesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: DigitalSource;
};

/** A connection to a list of items. */
export type ListProfileNodesConnection = {
  __typename?: 'ListProfileNodesConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ListProfileNodesEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<IProfileNode>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ListProfileNodesEdge = {
  __typename?: 'ListProfileNodesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: IProfileNode;
};

/** A connection to a list of items. */
export type ListProfilesConnection = {
  __typename?: 'ListProfilesConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ListProfilesEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Profile>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ListProfilesEdge = {
  __typename?: 'ListProfilesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Profile;
};

/** A connection to a list of items. */
export type ListRecordersConnection = {
  __typename?: 'ListRecordersConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ListRecordersEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Recorder>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ListRecordersEdge = {
  __typename?: 'ListRecordersEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Recorder;
};

export type ListStringOperationFilterInput = {
  all?: InputMaybe<StringOperationFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<StringOperationFilterInput>;
  some?: InputMaybe<StringOperationFilterInput>;
};

/** A connection to a list of items. */
export type ListVideoChannelsConnection = {
  __typename?: 'ListVideoChannelsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ListVideoChannelsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<VideoChannel>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ListVideoChannelsEdge = {
  __typename?: 'ListVideoChannelsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: VideoChannel;
};

/** A connection to a list of items. */
export type ListVideoStreamsConnection = {
  __typename?: 'ListVideoStreamsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ListVideoStreamsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<VideoStream>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ListVideoStreamsEdge = {
  __typename?: 'ListVideoStreamsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: VideoStream;
};

/** Metadata alarm trigger resource definition. */
export type MetadataAlarmTrigger = IAlarmTrigger & {
  __typename?: 'MetadataAlarmTrigger';
  /** Indicates if acknowledgment is required. */
  acknowledgeRequired: Scalars['Boolean']['output'];
  /** The name of the user who added this resource. */
  addedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was added. */
  addedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Identifier of the related source component (digital input, video channel, etc.). */
  componentId: Scalars['String']['output'];
  /** The name of the user who deleted this resource. */
  deletedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was deleted. */
  deletedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Unique event number for legacy recorders. */
  eventNumber: Scalars['Int']['output'];
  /** Unique identifier of the resource object (GUID string). */
  id: Scalars['String']['output'];
  /** Alarm trigger type. */
  kind: Scalars['String']['output'];
  /** Identifier of the parent recorder. */
  recorderId: Scalars['String']['output'];
  /** Source type of the metadata. */
  sourceType: MetadataAlarmTriggerSourceType;
  /** The version of the specification which the resource uses. */
  specVersion: Scalars['String']['output'];
  /** Alarm trigger tolerance time in seconds. */
  toleranceSeconds: Scalars['Int']['output'];
  /** The name of the user who updated this resource. */
  updatedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was updated. */
  updatedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version: Scalars['String']['output'];
  /** Zone identifier (if zone is not used, then it is null). */
  zoneId?: Maybe<Scalars['String']['output']>;
};

/** The data type for the metadata alarm trigger creation. */
export type MetadataAlarmTriggerCreateInput = {
  /** Indicates if acknowledgment is required. */
  acknowledgeRequired: Scalars['Boolean']['input'];
  /** Identifier of the related source of metadata. */
  componentId: Scalars['String']['input'];
  /** Identifier of the parent recorder. */
  recorderId: Scalars['String']['input'];
  /** Source type of the metadata. */
  sourceType: MetadataAlarmTriggerSourceType;
  /** Alarm trigger tolerance time in seconds. */
  toleranceSeconds: Scalars['Int']['input'];
  /** Zone identifier (if zone is not used, then it is null). */
  zoneId?: InputMaybe<Scalars['String']['input']>;
};

/** Enumeration of the metadata source types. */
export enum MetadataAlarmTriggerSourceType {
  Any = 'ANY',
  Audio = 'AUDIO',
  Io = 'IO',
  Textdata = 'TEXTDATA',
  Video = 'VIDEO'
}

/** The data type for the metadata alarm trigger update. */
export type MetadataAlarmTriggerUpdateInput = {
  /** Indicates if acknowledgment is required. */
  acknowledgeRequired?: InputMaybe<Scalars['Boolean']['input']>;
  /** Identifier of the entity to update. */
  id: Scalars['String']['input'];
  /** Alarm trigger tolerance time in seconds. */
  toleranceSeconds?: InputMaybe<Scalars['Int']['input']>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version: Scalars['String']['input'];
  /** Zone identifier (if zone is not used, then it is null). */
  zoneId?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Add an alarm */
  addAlarm: Alarm;
  /** Add an alarm configuration */
  addAlarmConfiguration: AlarmConfiguration;
  /** Add an alarm profile node */
  addAlarmProfileNode: AlarmNode;
  /** Add an audio alarm trigger */
  addAudioAlarmTrigger: AudioAlarmTrigger;
  /** Add an audio recording alarm action */
  addAudioRecordingAlarmAction: AudioRecordingAlarmAction;
  /** Add a device */
  addDevice: Device;
  /** Add a digital input alarm trigger */
  addDigitalInputAlarmTrigger: DigitalInputAlarmTrigger;
  /** Add a digital input profile node */
  addDigitalInputProfileNode: DigitalInputNode;
  /** Add a digital output alarm action */
  addDigitalOutputAlarmAction: DigitalOutputAlarmAction;
  /** Add a digital output profile node */
  addDigitalOutputProfileNode: DigitalOutputNode;
  /** Add a digital source */
  addDigitalSource: DigitalSource;
  /** Add a disable alarms alarm action */
  addDisableAlarmsAlarmAction: DisableAlarmsAlarmAction;
  /** Add a disable client zones alarm action */
  addDisableClientZonesAlarmAction: DisableClientZonesAlarmAction;
  /** Add an email alarm action */
  addEmailAlarmAction: EmailAlarmAction;
  /** Add a external alarm trigger */
  addExternalAlarmTrigger: ExternalAlarmTrigger;
  /** Add a folder profile node */
  addFolderProfileNode: FolderNode;
  /** Add a list of alarm configurations */
  addManyAlarmConfigurations: Array<AlarmConfiguration>;
  /** Add a list of alarms */
  addManyAlarms: Array<Alarm>;
  /** Add a list of devices */
  addManyDevices: Array<Device>;
  /** Add a list of digital sources */
  addManyDigitalSources: Array<DigitalSource>;
  /** Add a list of profiles */
  addManyProfiles: Array<Profile>;
  /** Add a list of recorders */
  addManyRecorders: Array<Recorder>;
  /** Add a list of video channels */
  addManyVideoChannels: Array<VideoChannel>;
  /** Add a list of video streams */
  addManyVideoStreams: Array<VideoStream>;
  /** Add a metadata alarm trigger */
  addMetadataAlarmTrigger: MetadataAlarmTrigger;
  /** Add a profile */
  addProfile: Profile;
  /** Add a PTZ alarm action */
  addPtzAlarmAction: PtzAlarmAction;
  /** Add a recorder */
  addRecorder: Recorder;
  /** Add a set motion mask alarm action */
  addSetMotionMaskAlarmAction: SetMotionMaskAlarmAction;
  /** Add a text alarm trigger */
  addTextAlarmTrigger: TextAlarmTrigger;
  /** Add a video alarm trigger */
  addVideoAlarmTrigger: VideoAlarmTrigger;
  /** Add a video channel */
  addVideoChannel: VideoChannel;
  /** Add a video channel profile node */
  addVideoChannelProfileNode: VideoChannelNode;
  /** Add a video recording alarm action */
  addVideoRecordingAlarmAction: VideoRecordingAlarmAction;
  /** Add a video stream */
  addVideoStream: VideoStream;
  /** Delete an alarm by id */
  deleteAlarm: Alarm;
  /** Delete an alarm action by id */
  deleteAlarmAction: IAlarmAction;
  /** Delete an alarm configuration by id */
  deleteAlarmConfiguration: AlarmConfiguration;
  /** Delete an alarm trigger by id */
  deleteAlarmTrigger: IAlarmTrigger;
  /** Delete a device by id */
  deleteDevice: Device;
  /** Delete a recorder by id */
  deleteDigitalSource: DigitalSource;
  /** Delete a list of alarm actions */
  deleteManyAlarmActions: Array<IAlarmAction>;
  /** Delete a list of alarm configurations */
  deleteManyAlarmConfigurations: Array<AlarmConfiguration>;
  /** Delete a list of alarm triggers */
  deleteManyAlarmTriggers: Array<IAlarmTrigger>;
  /** Delete a list of alarms */
  deleteManyAlarms: Array<Alarm>;
  /** Delete a list of devices */
  deleteManyDevices: Array<Device>;
  /** Delete a list of recorders */
  deleteManyDigitalSources: Array<DigitalSource>;
  /** Delete a list of profile nodes */
  deleteManyProfileNodes: Array<IProfileNode>;
  /** Delete a list of profiles */
  deleteManyProfiles: Array<Profile>;
  /** Delete a list of recorders */
  deleteManyRecorders: Array<Recorder>;
  /** Delete a list of video channels */
  deleteManyVideoChannels: Array<VideoChannel>;
  /** Delete a list of video streams */
  deleteManyVideoStreams: Array<VideoStream>;
  /** Delete a profile by id */
  deleteProfile: Profile;
  /** Delete a profile node by id */
  deleteProfileNode: IProfileNode;
  /** Delete a recorder by id */
  deleteRecorder: Recorder;
  /** Delete a video channel by id */
  deleteVideoChannel: VideoChannel;
  /** Delete a video stream by id */
  deleteVideoStream: VideoStream;
  /** Update an alarm */
  updateAlarm: Alarm;
  /** Update an alarm configuration */
  updateAlarmConfiguration: AlarmConfiguration;
  /** Update an alarm profile node */
  updateAlarmProfileNode: AlarmNode;
  /** Update an audio alarm trigger */
  updateAudioAlarmTrigger: AudioAlarmTrigger;
  /** Update an audio recording alarm action */
  updateAudioRecordingAlarmAction: AudioRecordingAlarmAction;
  /** Update a device */
  updateDevice: Device;
  /** Update a digital input alarm trigger */
  updateDigitalInputAlarmTrigger: DigitalInputAlarmTrigger;
  /** Update a digital input profile node */
  updateDigitalInputProfileNode: DigitalInputNode;
  /** Update a digital output alarm action */
  updateDigitalOutputAlarmAction: DigitalOutputAlarmAction;
  /** Update a digital output profile node */
  updateDigitalOutputProfileNode: DigitalOutputNode;
  /** Update a digital source */
  updateDigitalSource: DigitalSource;
  /** Update a disable alarms alarm action */
  updateDisableAlarmsAlarmAction: DisableAlarmsAlarmAction;
  /** Update a disable client zones alarm action */
  updateDisableClientZonesAlarmAction: DisableClientZonesAlarmAction;
  /** Update an email alarm action */
  updateEmailAlarmAction: EmailAlarmAction;
  /** Update a external alarm trigger */
  updateExternalAlarmTrigger: ExternalAlarmTrigger;
  /** Update a folder profile node */
  updateFolderProfileNode: FolderNode;
  /** Update a list of alarm configurations */
  updateManyAlarmConfigurations: Array<AlarmConfiguration>;
  /** Update a list of alarms */
  updateManyAlarms: Array<Alarm>;
  /** Update a list of devices */
  updateManyDevices: Array<Device>;
  /** Update a list of digtal sources */
  updateManyDigitalSources: Array<DigitalSource>;
  /** Update a list of profiles */
  updateManyProfiles: Array<Profile>;
  /** Update a list of recorders */
  updateManyRecorders: Array<Recorder>;
  /** Update a list of video channels */
  updateManyVideoChannels: Array<VideoChannel>;
  /** Update a list of video streams */
  updateManyVideoStreams: Array<VideoStream>;
  /** Update a metadata alarm trigger */
  updateMetadataAlarmTrigger: MetadataAlarmTrigger;
  /** Update a profile */
  updateProfile: Profile;
  /** Update a PTZ alarm action */
  updatePtzAlarmAction: PtzAlarmAction;
  /** Update a recorder */
  updateRecorder: Recorder;
  /** Update a set motion mask alarm action */
  updateSetMotionMaskAlarmAction: SetMotionMaskAlarmAction;
  /** Update a text alarm trigger */
  updateTextAlarmTrigger: TextAlarmTrigger;
  /** Update a video alarm trigger */
  updateVideoAlarmTrigger: VideoAlarmTrigger;
  /** Update a video channel */
  updateVideoChannel: VideoChannel;
  /** Update a video channel profile node */
  updateVideoChannelProfileNode: VideoChannelNode;
  /** Update a video recording alarm action */
  updateVideoRecordingAlarmAction: VideoRecordingAlarmAction;
  /** Update a video stream */
  updateVideoStream: VideoStream;
};


export type MutationAddAlarmArgs = {
  obj: AlarmCreateInput;
};


export type MutationAddAlarmConfigurationArgs = {
  obj: AlarmConfigurationCreateInput;
};


export type MutationAddAlarmProfileNodeArgs = {
  obj: AlarmNodeCreateInput;
};


export type MutationAddAudioAlarmTriggerArgs = {
  obj: AudioAlarmTriggerCreateInput;
};


export type MutationAddAudioRecordingAlarmActionArgs = {
  obj: AudioRecordingAlarmActionCreateInput;
};


export type MutationAddDeviceArgs = {
  obj: DeviceCreateInput;
};


export type MutationAddDigitalInputAlarmTriggerArgs = {
  obj: DigitalInputAlarmTriggerCreateInput;
};


export type MutationAddDigitalInputProfileNodeArgs = {
  obj: DigitalInputNodeCreateInput;
};


export type MutationAddDigitalOutputAlarmActionArgs = {
  obj: DigitalOutputAlarmActionCreateInput;
};


export type MutationAddDigitalOutputProfileNodeArgs = {
  obj: DigitalOutputNodeCreateInput;
};


export type MutationAddDigitalSourceArgs = {
  obj: DigitalSourceCreateInput;
};


export type MutationAddDisableAlarmsAlarmActionArgs = {
  obj: DisableAlarmsAlarmActionCreateInput;
};


export type MutationAddDisableClientZonesAlarmActionArgs = {
  obj: DisableClientZonesAlarmActionCreateInput;
};


export type MutationAddEmailAlarmActionArgs = {
  obj: EmailAlarmActionCreateInput;
};


export type MutationAddExternalAlarmTriggerArgs = {
  obj: ExternalAlarmTriggerCreateInput;
};


export type MutationAddFolderProfileNodeArgs = {
  obj: FolderNodeCreateInput;
};


export type MutationAddManyAlarmConfigurationsArgs = {
  objects: Array<AlarmConfigurationCreateInput>;
};


export type MutationAddManyAlarmsArgs = {
  objects: Array<AlarmCreateInput>;
};


export type MutationAddManyDevicesArgs = {
  objects: Array<DeviceCreateInput>;
};


export type MutationAddManyDigitalSourcesArgs = {
  objects: Array<DigitalSourceCreateInput>;
};


export type MutationAddManyProfilesArgs = {
  objects: Array<ProfileCreateInput>;
};


export type MutationAddManyRecordersArgs = {
  objects: Array<RecorderCreateInput>;
};


export type MutationAddManyVideoChannelsArgs = {
  objects: Array<VideoChannelCreateInput>;
};


export type MutationAddManyVideoStreamsArgs = {
  objects: Array<VideoStreamCreateInput>;
};


export type MutationAddMetadataAlarmTriggerArgs = {
  obj: MetadataAlarmTriggerCreateInput;
};


export type MutationAddProfileArgs = {
  obj: ProfileCreateInput;
};


export type MutationAddPtzAlarmActionArgs = {
  obj: PtzAlarmActionCreateInput;
};


export type MutationAddRecorderArgs = {
  obj: RecorderCreateInput;
};


export type MutationAddSetMotionMaskAlarmActionArgs = {
  obj: SetMotionMaskAlarmActionCreateInput;
};


export type MutationAddTextAlarmTriggerArgs = {
  obj: TextAlarmTriggerCreateInput;
};


export type MutationAddVideoAlarmTriggerArgs = {
  obj: VideoAlarmTriggerCreateInput;
};


export type MutationAddVideoChannelArgs = {
  obj: VideoChannelCreateInput;
};


export type MutationAddVideoChannelProfileNodeArgs = {
  obj: VideoChannelNodeCreateInput;
};


export type MutationAddVideoRecordingAlarmActionArgs = {
  obj: VideoRecordingAlarmActionCreateInput;
};


export type MutationAddVideoStreamArgs = {
  obj: VideoStreamCreateInput;
};


export type MutationDeleteAlarmArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteAlarmActionArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteAlarmConfigurationArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteAlarmTriggerArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteDeviceArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteDigitalSourceArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteManyAlarmActionsArgs = {
  ids: Array<Scalars['String']['input']>;
};


export type MutationDeleteManyAlarmConfigurationsArgs = {
  ids: Array<Scalars['String']['input']>;
};


export type MutationDeleteManyAlarmTriggersArgs = {
  ids: Array<Scalars['String']['input']>;
};


export type MutationDeleteManyAlarmsArgs = {
  ids: Array<Scalars['String']['input']>;
};


export type MutationDeleteManyDevicesArgs = {
  ids: Array<Scalars['String']['input']>;
};


export type MutationDeleteManyDigitalSourcesArgs = {
  ids: Array<Scalars['String']['input']>;
};


export type MutationDeleteManyProfileNodesArgs = {
  ids: Array<Scalars['String']['input']>;
};


export type MutationDeleteManyProfilesArgs = {
  ids: Array<Scalars['String']['input']>;
};


export type MutationDeleteManyRecordersArgs = {
  ids: Array<Scalars['String']['input']>;
};


export type MutationDeleteManyVideoChannelsArgs = {
  ids: Array<Scalars['String']['input']>;
};


export type MutationDeleteManyVideoStreamsArgs = {
  ids: Array<Scalars['String']['input']>;
};


export type MutationDeleteProfileArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteProfileNodeArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteRecorderArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteVideoChannelArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteVideoStreamArgs = {
  id: Scalars['String']['input'];
};


export type MutationUpdateAlarmArgs = {
  obj: AlarmUpdateInput;
};


export type MutationUpdateAlarmConfigurationArgs = {
  obj: AlarmConfigurationUpdateInput;
};


export type MutationUpdateAlarmProfileNodeArgs = {
  obj: AlarmNodeUpdateInput;
};


export type MutationUpdateAudioAlarmTriggerArgs = {
  obj: AudioAlarmTriggerUpdateInput;
};


export type MutationUpdateAudioRecordingAlarmActionArgs = {
  obj: AudioRecordingAlarmActionUpdateInput;
};


export type MutationUpdateDeviceArgs = {
  obj: DeviceUpdateInput;
};


export type MutationUpdateDigitalInputAlarmTriggerArgs = {
  obj: DigitalInputAlarmTriggerUpdateInput;
};


export type MutationUpdateDigitalInputProfileNodeArgs = {
  obj: DigitalInputNodeUpdateInput;
};


export type MutationUpdateDigitalOutputAlarmActionArgs = {
  obj: DigitalOutputAlarmActionUpdateInput;
};


export type MutationUpdateDigitalOutputProfileNodeArgs = {
  obj: DigitalOutputNodeUpdateInput;
};


export type MutationUpdateDigitalSourceArgs = {
  obj: DigitalSourceUpdateInput;
};


export type MutationUpdateDisableAlarmsAlarmActionArgs = {
  obj: DisableAlarmsAlarmActionUpdateInput;
};


export type MutationUpdateDisableClientZonesAlarmActionArgs = {
  obj: DisableClientZonesAlarmActionUpdateInput;
};


export type MutationUpdateEmailAlarmActionArgs = {
  obj: EmailAlarmActionUpdateInput;
};


export type MutationUpdateExternalAlarmTriggerArgs = {
  obj: ExternalAlarmTriggerUpdateInput;
};


export type MutationUpdateFolderProfileNodeArgs = {
  obj: FolderNodeUpdateInput;
};


export type MutationUpdateManyAlarmConfigurationsArgs = {
  objects: Array<AlarmConfigurationUpdateInput>;
};


export type MutationUpdateManyAlarmsArgs = {
  objects: Array<AlarmUpdateInput>;
};


export type MutationUpdateManyDevicesArgs = {
  objects: Array<DeviceUpdateInput>;
};


export type MutationUpdateManyDigitalSourcesArgs = {
  objects: Array<DigitalSourceUpdateInput>;
};


export type MutationUpdateManyProfilesArgs = {
  objects: Array<ProfileUpdateInput>;
};


export type MutationUpdateManyRecordersArgs = {
  objects: Array<RecorderUpdateInput>;
};


export type MutationUpdateManyVideoChannelsArgs = {
  objects: Array<VideoChannelUpdateInput>;
};


export type MutationUpdateManyVideoStreamsArgs = {
  objects: Array<VideoStreamUpdateInput>;
};


export type MutationUpdateMetadataAlarmTriggerArgs = {
  obj: MetadataAlarmTriggerUpdateInput;
};


export type MutationUpdateProfileArgs = {
  obj: ProfileUpdateInput;
};


export type MutationUpdatePtzAlarmActionArgs = {
  obj: PtzAlarmActionUpdateInput;
};


export type MutationUpdateRecorderArgs = {
  obj: RecorderUpdateInput;
};


export type MutationUpdateSetMotionMaskAlarmActionArgs = {
  obj: SetMotionMaskAlarmActionUpdateInput;
};


export type MutationUpdateTextAlarmTriggerArgs = {
  obj: TextAlarmTriggerUpdateInput;
};


export type MutationUpdateVideoAlarmTriggerArgs = {
  obj: VideoAlarmTriggerUpdateInput;
};


export type MutationUpdateVideoChannelArgs = {
  obj: VideoChannelUpdateInput;
};


export type MutationUpdateVideoChannelProfileNodeArgs = {
  obj: VideoChannelNodeUpdateInput;
};


export type MutationUpdateVideoRecordingAlarmActionArgs = {
  obj: VideoRecordingAlarmActionUpdateInput;
};


export type MutationUpdateVideoStreamArgs = {
  obj: VideoStreamUpdateInput;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** Indicates whether more edges exist following the set defined by the clients arguments. */
  hasNextPage: Scalars['Boolean']['output'];
  /** Indicates whether more edges exist prior the set defined by the clients arguments. */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

/** Enumeration of the profile node actions. */
export enum PrimaryAction {
  Carousel = 'CAROUSEL',
  CloseArchive = 'CLOSE_ARCHIVE',
  Connect = 'CONNECT',
  DeleteArchive = 'DELETE_ARCHIVE',
  Disconnect = 'DISCONNECT',
  DomeControl = 'DOME_CONTROL',
  MakeArchive = 'MAKE_ARCHIVE',
  NoAction = 'NO_ACTION',
  OpenAlarmPlayback = 'OPEN_ALARM_PLAYBACK',
  OpenPlayback = 'OPEN_PLAYBACK',
  OpenRealtime = 'OPEN_REALTIME',
  PulseState = 'PULSE_STATE',
  RefreshState = 'REFRESH_STATE',
  ShowActions = 'SHOW_ACTIONS',
  ShowAlarmViews = 'SHOW_ALARM_VIEWS',
  ShowCapture = 'SHOW_CAPTURE',
  ShowDescription = 'SHOW_DESCRIPTION',
  ShowDome = 'SHOW_DOME',
  ShowInfo = 'SHOW_INFO',
  ShowReferenceImage = 'SHOW_REFERENCE_IMAGE',
  ShowUpdate = 'SHOW_UPDATE',
  SwitchCamera = 'SWITCH_CAMERA',
  ToggleState = 'TOGGLE_STATE'
}

/** Profile resource definition. */
export type Profile = {
  __typename?: 'Profile';
  /** The name of the user who added this resource. */
  addedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was added. */
  addedTime?: Maybe<Scalars['DateTime']['output']>;
  /** The name of the user who deleted this resource. */
  deletedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was deleted. */
  deletedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Unique identifier of the resource object (GUID string). */
  id: Scalars['ID']['output'];
  /** Profile settings (parameters that are currently chosen by client). */
  settings: ProfileSettings;
  /** The version of the specification which the resource uses. */
  specVersion: Scalars['String']['output'];
  /** The name of the user who updated this resource. */
  updatedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was updated. */
  updatedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version: Scalars['String']['output'];
};

/** The data type for the profile creation. */
export type ProfileCreateInput = {
  /** Resource custom description which is visible for user, optional. */
  description: Scalars['String']['input'];
  /** Is resource enabled or disabled. */
  enabled: Scalars['Boolean']['input'];
  /** Resource display name which is visible for user. */
  name: Scalars['String']['input'];
};

/** Profile resource definition. */
export type ProfileFilterInput = {
  /** The name of the user who added this resource. */
  addedBy?: InputMaybe<StringOperationFilterInput>;
  /** The timestamp when the resource was added. */
  addedTime?: InputMaybe<DateTimeOperationFilterInput>;
  and?: InputMaybe<Array<ProfileFilterInput>>;
  /** The name of the user who deleted this resource. */
  deletedBy?: InputMaybe<StringOperationFilterInput>;
  /** The timestamp when the resource was deleted. */
  deletedTime?: InputMaybe<DateTimeOperationFilterInput>;
  /** Unique identifier of the resource object (GUID string). */
  id?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<ProfileFilterInput>>;
  /** Profile settings (parameters that are currently chosen by client). */
  settings?: InputMaybe<ProfileSettingsFilterInput>;
  /** The version of the specification which the resource uses. */
  specVersion?: InputMaybe<StringOperationFilterInput>;
  /** The name of the user who updated this resource. */
  updatedBy?: InputMaybe<StringOperationFilterInput>;
  /** The timestamp when the resource was updated. */
  updatedTime?: InputMaybe<DateTimeOperationFilterInput>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version?: InputMaybe<StringOperationFilterInput>;
};

/** Profile node resource definition. */
export type ProfileNodeFilterInput = {
  /** The name of the user who added this resource. */
  addedBy?: InputMaybe<StringOperationFilterInput>;
  /** The timestamp when the resource was added. */
  addedTime?: InputMaybe<DateTimeOperationFilterInput>;
  and?: InputMaybe<Array<ProfileNodeFilterInput>>;
  /** Identifier of the related alarm configuration. */
  componentId?: InputMaybe<StringOperationFilterInput>;
  /** The name of the user who deleted this resource. */
  deletedBy?: InputMaybe<StringOperationFilterInput>;
  /** The timestamp when the resource was deleted. */
  deletedTime?: InputMaybe<DateTimeOperationFilterInput>;
  /** Profile node description which is visible for user, optional. */
  description?: InputMaybe<StringOperationFilterInput>;
  /** The icon set number for the profile node icon. */
  iconSetNumber?: InputMaybe<StringOperationFilterInput>;
  /** Unique identifier of the resource object (GUID string). */
  id?: InputMaybe<StringOperationFilterInput>;
  /** Profile node type. */
  kind?: InputMaybe<StringOperationFilterInput>;
  /** Profile node name which is visible for user. */
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<ProfileNodeFilterInput>>;
  /** Profile node parent node identifier. */
  parentNodeId?: InputMaybe<StringOperationFilterInput>;
  /** Profile node profile identifier. */
  profileId?: InputMaybe<StringOperationFilterInput>;
  /** The version of the specification which the resource uses. */
  specVersion?: InputMaybe<StringOperationFilterInput>;
  /** The name of the user who updated this resource. */
  updatedBy?: InputMaybe<StringOperationFilterInput>;
  /** The timestamp when the resource was updated. */
  updatedTime?: InputMaybe<DateTimeOperationFilterInput>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version?: InputMaybe<StringOperationFilterInput>;
};

/** Profile node resource definition. */
export type ProfileNodeSortInput = {
  /** The name of the user who added this resource. */
  addedBy?: InputMaybe<SortEnumType>;
  /** The timestamp when the resource was added. */
  addedTime?: InputMaybe<SortEnumType>;
  /** Identifier of the related alarm configuration. */
  componentId?: InputMaybe<SortEnumType>;
  /** The name of the user who deleted this resource. */
  deletedBy?: InputMaybe<SortEnumType>;
  /** The timestamp when the resource was deleted. */
  deletedTime?: InputMaybe<SortEnumType>;
  /** Profile node description which is visible for user, optional. */
  description?: InputMaybe<SortEnumType>;
  /** The icon set number for the profile node icon. */
  iconSetNumber?: InputMaybe<SortEnumType>;
  /** Unique identifier of the resource object (GUID string). */
  id?: InputMaybe<SortEnumType>;
  /** Profile node type. */
  kind?: InputMaybe<SortEnumType>;
  /** Profile node name which is visible for user. */
  name?: InputMaybe<SortEnumType>;
  /** Profile node parent node identifier. */
  parentNodeId?: InputMaybe<SortEnumType>;
  /** Profile node profile identifier. */
  profileId?: InputMaybe<SortEnumType>;
  /** The version of the specification which the resource uses. */
  specVersion?: InputMaybe<SortEnumType>;
  /** The name of the user who updated this resource. */
  updatedBy?: InputMaybe<SortEnumType>;
  /** The timestamp when the resource was updated. */
  updatedTime?: InputMaybe<SortEnumType>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version?: InputMaybe<SortEnumType>;
};

/** Profile settings definition. */
export type ProfileSettings = {
  __typename?: 'ProfileSettings';
  /** Resource custom description which is visible for user, optional. */
  description: Scalars['String']['output'];
  /** Is resource enabled or disabled. */
  enabled: Scalars['Boolean']['output'];
  /** Resource display name which is visible for user. */
  name: Scalars['String']['output'];
};

/** Profile settings definition. */
export type ProfileSettingsFilterInput = {
  and?: InputMaybe<Array<ProfileSettingsFilterInput>>;
  /** Resource custom description which is visible for user, optional. */
  description?: InputMaybe<StringOperationFilterInput>;
  /** Is resource enabled or disabled. */
  enabled?: InputMaybe<BooleanOperationFilterInput>;
  /** Resource display name which is visible for user. */
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<ProfileSettingsFilterInput>>;
};

/** Profile settings definition. */
export type ProfileSettingsSortInput = {
  /** Resource custom description which is visible for user, optional. */
  description?: InputMaybe<SortEnumType>;
  /** Is resource enabled or disabled. */
  enabled?: InputMaybe<SortEnumType>;
  /** Resource display name which is visible for user. */
  name?: InputMaybe<SortEnumType>;
};

/** Profile resource definition. */
export type ProfileSortInput = {
  /** The name of the user who added this resource. */
  addedBy?: InputMaybe<SortEnumType>;
  /** The timestamp when the resource was added. */
  addedTime?: InputMaybe<SortEnumType>;
  /** The name of the user who deleted this resource. */
  deletedBy?: InputMaybe<SortEnumType>;
  /** The timestamp when the resource was deleted. */
  deletedTime?: InputMaybe<SortEnumType>;
  /** Unique identifier of the resource object (GUID string). */
  id?: InputMaybe<SortEnumType>;
  /** Profile settings (parameters that are currently chosen by client). */
  settings?: InputMaybe<ProfileSettingsSortInput>;
  /** The version of the specification which the resource uses. */
  specVersion?: InputMaybe<SortEnumType>;
  /** The name of the user who updated this resource. */
  updatedBy?: InputMaybe<SortEnumType>;
  /** The timestamp when the resource was updated. */
  updatedTime?: InputMaybe<SortEnumType>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version?: InputMaybe<SortEnumType>;
};

export type ProfileUpdateInput = {
  /** Resource custom description which is visible for user, optional. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Is resource enabled or disabled. */
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Unique identifier of the resource object (GUID string). */
  id: Scalars['String']['input'];
  /** Resource display name which is visible for user. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version: Scalars['String']['input'];
};

/** PTZ alarm action resource definition. */
export type PtzAlarmAction = IAlarmAction & {
  __typename?: 'PtzAlarmAction';
  /** The PTZ action string. */
  actionString: Scalars['String']['output'];
  /** The PTZ action type. */
  actionType: PtzAlarmActionType;
  /** The name of the user who added this resource. */
  addedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was added. */
  addedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Identifier of the related destination component (digital output, video channel, etc.). */
  componentId: Scalars['String']['output'];
  /** The name of the user who deleted this resource. */
  deletedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was deleted. */
  deletedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Unique identifier of the resource object (GUID string). */
  id: Scalars['String']['output'];
  /** Alarm trigger type. */
  kind: Scalars['String']['output'];
  recorder: Recorder;
  /** Identifier of the parent recorder. */
  recorderId: Scalars['String']['output'];
  /** The version of the specification which the resource uses. */
  specVersion: Scalars['String']['output'];
  /** The name of the user who updated this resource. */
  updatedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was updated. */
  updatedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version: Scalars['String']['output'];
  videoChannel: VideoChannel;
};

/** The data type for the PTZ alarm action creation. */
export type PtzAlarmActionCreateInput = {
  /** The PTZ action string. */
  actionString: Scalars['String']['input'];
  /** The PTZ action type. */
  actionType: PtzAlarmActionType;
  /** Identifier of the related video channel. */
  componentId: Scalars['String']['input'];
  /** Identifier of the parent recorder. */
  recorderId: Scalars['String']['input'];
};

/** Enumeration of the PTZ alarm action types. */
export enum PtzAlarmActionType {
  Preset = 'PRESET',
  Program = 'PROGRAM'
}

/** The data type for the PTZ alarm action update. */
export type PtzAlarmActionUpdateInput = {
  /** The PTZ action string. */
  actionString?: InputMaybe<Scalars['String']['input']>;
  /** The PTZ action type. */
  actionType?: InputMaybe<PtzAlarmActionType>;
  /** Identifier of the entity to update. */
  id: Scalars['String']['input'];
  /** Version of resource object, is used for optimistic concurrency control. */
  version: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  /** Find an alarm by id */
  getAlarm: Alarm;
  /** Find an alarm action by id */
  getAlarmAction: IAlarmAction;
  /** Find an alarm configuration by id */
  getAlarmConfiguration: AlarmConfiguration;
  /** Find an alarm trigger by id */
  getAlarmTrigger: IAlarmTrigger;
  /** Find a device by id */
  getDevice: Device;
  /** Find a digital source by id */
  getDigitalSource: DigitalSource;
  /** Find a profile by id */
  getProfile: Profile;
  /** Find a profile by id */
  getProfileNode: IProfileNode;
  /** Find a recorder by id */
  getRecorder: Recorder;
  /** Find a video channel by id */
  getVideoChannel: VideoChannel;
  /** Find a video stream by id */
  getVideoStream: VideoStream;
  /** List of alarm actions */
  listAlarmActions?: Maybe<ListAlarmActionsConnection>;
  /** List of alarm configurations */
  listAlarmConfigurations?: Maybe<ListAlarmConfigurationsConnection>;
  /** List of alarm triggers */
  listAlarmTriggers?: Maybe<ListAlarmTriggersConnection>;
  /** List of alarms */
  listAlarms?: Maybe<ListAlarmsConnection>;
  /** List of alarms filtered by configuration identifiers */
  listAlarmsByConfigurationIds?: Maybe<ListAlarmsByConfigurationIdsConnection>;
  /** Returns a list of audit records */
  listAuditRecords?: Maybe<ListAuditRecordsConnection>;
  /** Returns a list of devices with pagination, projection, sorting and filtering */
  listDevices?: Maybe<ListDevicesConnection>;
  /** Returns a list of digital sources with pagination, projection, sorting and filtering */
  listDigitalSources?: Maybe<ListDigitalSourcesConnection>;
  /** List of profile nodes */
  listProfileNodes?: Maybe<ListProfileNodesConnection>;
  /** List of profiles */
  listProfiles?: Maybe<ListProfilesConnection>;
  /** Returns a list of recorders with pagination, projection, sorting and filtering */
  listRecorders?: Maybe<ListRecordersConnection>;
  /** Returns a list of video channels with pagination, sorting and filtering */
  listVideoChannels?: Maybe<ListVideoChannelsConnection>;
  /** Returns a list of video streams with pagination, sorting and filtering */
  listVideoStreams?: Maybe<ListVideoStreamsConnection>;
};


export type QueryGetAlarmArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetAlarmActionArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetAlarmConfigurationArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetAlarmTriggerArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetDeviceArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetDigitalSourceArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetProfileArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetProfileNodeArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetRecorderArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetVideoChannelArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetVideoStreamArgs = {
  id: Scalars['String']['input'];
};


export type QueryListAlarmActionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<AlarmActionSortInput>>;
  where?: InputMaybe<AlarmActionFilterInput>;
};


export type QueryListAlarmConfigurationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<AlarmConfigurationSortInput>>;
  where?: InputMaybe<AlarmConfigurationFilterInput>;
};


export type QueryListAlarmTriggersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<AlarmTriggerSortInput>>;
  where?: InputMaybe<AlarmTriggerFilterInput>;
};


export type QueryListAlarmsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<AlarmSortInput>>;
  where?: InputMaybe<AlarmFilterInput>;
};


export type QueryListAlarmsByConfigurationIdsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  ids: Array<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<AlarmSortInput>>;
  where?: InputMaybe<AlarmFilterInput>;
};


export type QueryListAuditRecordsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<AuditRecordSortInput>>;
  where?: InputMaybe<AuditRecordFilterInput>;
};


export type QueryListDevicesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<DeviceSortInput>>;
  where?: InputMaybe<DeviceFilterInput>;
};


export type QueryListDigitalSourcesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<DigitalSourceSortInput>>;
  where?: InputMaybe<DigitalSourceFilterInput>;
};


export type QueryListProfileNodesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<ProfileNodeSortInput>>;
  where?: InputMaybe<ProfileNodeFilterInput>;
};


export type QueryListProfilesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<ProfileSortInput>>;
  where?: InputMaybe<ProfileFilterInput>;
};


export type QueryListRecordersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<RecorderSortInput>>;
  where?: InputMaybe<RecorderFilterInput>;
};


export type QueryListVideoChannelsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<VideoChannelSortInput>>;
  where?: InputMaybe<VideoChannelFilterInput>;
};


export type QueryListVideoStreamsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<VideoStreamSortInput>>;
  where?: InputMaybe<VideoStreamFilterInput>;
};

/** Template for a Recorder entity that is used with relation to the DigitalSource entity. */
export type Recorder = {
  __typename?: 'Recorder';
  /** The name of the user who added this resource. */
  addedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was added. */
  addedTime?: Maybe<Scalars['DateTime']['output']>;
  /** The name of the user who deleted this resource. */
  deletedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was deleted. */
  deletedTime?: Maybe<Scalars['DateTime']['output']>;
  devices?: Maybe<DevicesConnection>;
  digitalSources?: Maybe<DigitalSourcesConnection>;
  /** Unique identifier of the resource object (GUID string). */
  id: Scalars['ID']['output'];
  /** Recorder settings. */
  settings: RecorderSettings;
  /** Firmware version for 3rd party devices and software version for Mirasys recorders. */
  softwareVersion: Scalars['String']['output'];
  /** The version of the specification which the resource uses. */
  specVersion: Scalars['String']['output'];
  /** Recorder status. */
  status: RecorderStatus;
  /** Time zone of the recorder. */
  timeZone: Scalars['String']['output'];
  /** The name of the user who updated this resource. */
  updatedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was updated. */
  updatedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version: Scalars['String']['output'];
  videoChannels?: Maybe<VideoChannelsConnection>;
  videoStreams?: Maybe<VideoStreamsConnection>;
};


/** Template for a Recorder entity that is used with relation to the DigitalSource entity. */
export type RecorderDevicesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<DeviceSortInput>>;
  where?: InputMaybe<DeviceFilterInput>;
};


/** Template for a Recorder entity that is used with relation to the DigitalSource entity. */
export type RecorderDigitalSourcesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<DigitalSourceSortInput>>;
  where?: InputMaybe<DigitalSourceFilterInput>;
};


/** Template for a Recorder entity that is used with relation to the DigitalSource entity. */
export type RecorderVideoChannelsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<VideoChannelSortInput>>;
  where?: InputMaybe<VideoChannelFilterInput>;
};


/** Template for a Recorder entity that is used with relation to the DigitalSource entity. */
export type RecorderVideoStreamsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<VideoStreamSortInput>>;
  where?: InputMaybe<VideoStreamFilterInput>;
};

/** The data type for the recorder creation. */
export type RecorderCreateInput = {
  /** Network address to connect to the recorder (host IP address or DNS name). */
  address: Scalars['String']['input'];
  /** Resource custom description which is visible for user, optional. */
  description: Scalars['String']['input'];
  /** Is resource enabled or disabled. */
  enabled: Scalars['Boolean']['input'];
  /** Network address for multicasting */
  multicastAddress?: InputMaybe<Scalars['String']['input']>;
  /** Resource display name which is visible for user. */
  name: Scalars['String']['input'];
  /** Network port to connect to the recorder. */
  port: Scalars['Int']['input'];
};

/** Recorder resource definition. */
export type RecorderFilterInput = {
  /** The name of the user who added this resource. */
  addedBy?: InputMaybe<StringOperationFilterInput>;
  /** The timestamp when the resource was added. */
  addedTime?: InputMaybe<DateTimeOperationFilterInput>;
  and?: InputMaybe<Array<RecorderFilterInput>>;
  /** The name of the user who deleted this resource. */
  deletedBy?: InputMaybe<StringOperationFilterInput>;
  /** The timestamp when the resource was deleted. */
  deletedTime?: InputMaybe<DateTimeOperationFilterInput>;
  /** Unique identifier of the resource object (GUID string). */
  id?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<RecorderFilterInput>>;
  /** Recorder settings. */
  settings?: InputMaybe<RecorderSettingsFilterInput>;
  /** Firmware version for 3rd party devices and software version for Mirasys recorders. */
  softwareVersion?: InputMaybe<StringOperationFilterInput>;
  /** The version of the specification which the resource uses. */
  specVersion?: InputMaybe<StringOperationFilterInput>;
  /** Recorder status. */
  status?: InputMaybe<RecorderStatusFilterInput>;
  /** Time zone of the recorder. */
  timeZone?: InputMaybe<StringOperationFilterInput>;
  /** The name of the user who updated this resource. */
  updatedBy?: InputMaybe<StringOperationFilterInput>;
  /** The timestamp when the resource was updated. */
  updatedTime?: InputMaybe<DateTimeOperationFilterInput>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version?: InputMaybe<StringOperationFilterInput>;
};

/** Recorder settings definition. */
export type RecorderSettings = {
  __typename?: 'RecorderSettings';
  /** Network address to connect to the recorder (host IP address or DNS name). */
  address: Scalars['String']['output'];
  /** Resource custom description which is visible for user, optional. */
  description: Scalars['String']['output'];
  /** Is resource enabled or disabled. */
  enabled: Scalars['Boolean']['output'];
  /** Network address for multicasting */
  multicastAddress?: Maybe<Scalars['String']['output']>;
  /** Resource display name which is visible for user. */
  name: Scalars['String']['output'];
  /** Network port to connect to the recorder. */
  port: Scalars['Int']['output'];
};

/** Recorder settings definition. */
export type RecorderSettingsFilterInput = {
  /** Network address to connect to the recorder (host IP address or DNS name). */
  address?: InputMaybe<StringOperationFilterInput>;
  and?: InputMaybe<Array<RecorderSettingsFilterInput>>;
  /** Resource custom description which is visible for user, optional. */
  description?: InputMaybe<StringOperationFilterInput>;
  /** Is resource enabled or disabled. */
  enabled?: InputMaybe<BooleanOperationFilterInput>;
  /** Network address for multicasting */
  multicastAddress?: InputMaybe<StringOperationFilterInput>;
  /** Resource display name which is visible for user. */
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<RecorderSettingsFilterInput>>;
  /** Network port to connect to the recorder. */
  port?: InputMaybe<IntOperationFilterInput>;
};

/** Recorder settings definition. */
export type RecorderSettingsSortInput = {
  /** Network address to connect to the recorder (host IP address or DNS name). */
  address?: InputMaybe<SortEnumType>;
  /** Resource custom description which is visible for user, optional. */
  description?: InputMaybe<SortEnumType>;
  /** Is resource enabled or disabled. */
  enabled?: InputMaybe<SortEnumType>;
  /** Network address for multicasting */
  multicastAddress?: InputMaybe<SortEnumType>;
  /** Resource display name which is visible for user. */
  name?: InputMaybe<SortEnumType>;
  /** Network port to connect to the recorder. */
  port?: InputMaybe<SortEnumType>;
};

/** Recorder resource definition. */
export type RecorderSortInput = {
  /** The name of the user who added this resource. */
  addedBy?: InputMaybe<SortEnumType>;
  /** The timestamp when the resource was added. */
  addedTime?: InputMaybe<SortEnumType>;
  /** The name of the user who deleted this resource. */
  deletedBy?: InputMaybe<SortEnumType>;
  /** The timestamp when the resource was deleted. */
  deletedTime?: InputMaybe<SortEnumType>;
  /** Unique identifier of the resource object (GUID string). */
  id?: InputMaybe<SortEnumType>;
  /** Recorder settings. */
  settings?: InputMaybe<RecorderSettingsSortInput>;
  /** Firmware version for 3rd party devices and software version for Mirasys recorders. */
  softwareVersion?: InputMaybe<SortEnumType>;
  /** The version of the specification which the resource uses. */
  specVersion?: InputMaybe<SortEnumType>;
  /** Recorder status. */
  status?: InputMaybe<RecorderStatusSortInput>;
  /** Time zone of the recorder. */
  timeZone?: InputMaybe<SortEnumType>;
  /** The name of the user who updated this resource. */
  updatedBy?: InputMaybe<SortEnumType>;
  /** The timestamp when the resource was updated. */
  updatedTime?: InputMaybe<SortEnumType>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version?: InputMaybe<SortEnumType>;
};

/** Recorder status definition. */
export type RecorderStatus = {
  __typename?: 'RecorderStatus';
  /** The adding condition of the recorder. */
  added: Condition;
  /** The capabilities fetching condition of the recorder. */
  capabilitiesReceived: Condition;
  /** The configuration condition of the recorder. */
  configured: Condition;
  /** The connection condition of the recorder. */
  connected: Condition;
};

/** Recorder status definition. */
export type RecorderStatusFilterInput = {
  /** The adding condition of the recorder. */
  added?: InputMaybe<ConditionFilterInput>;
  and?: InputMaybe<Array<RecorderStatusFilterInput>>;
  /** The capabilities fetching condition of the recorder. */
  capabilitiesReceived?: InputMaybe<ConditionFilterInput>;
  /** The configuration condition of the recorder. */
  configured?: InputMaybe<ConditionFilterInput>;
  /** The connection condition of the recorder. */
  connected?: InputMaybe<ConditionFilterInput>;
  or?: InputMaybe<Array<RecorderStatusFilterInput>>;
};

/** Recorder status definition. */
export type RecorderStatusSortInput = {
  /** The adding condition of the recorder. */
  added?: InputMaybe<ConditionSortInput>;
  /** The capabilities fetching condition of the recorder. */
  capabilitiesReceived?: InputMaybe<ConditionSortInput>;
  /** The configuration condition of the recorder. */
  configured?: InputMaybe<ConditionSortInput>;
  /** The connection condition of the recorder. */
  connected?: InputMaybe<ConditionSortInput>;
};

export type RecorderUpdateInput = {
  /** Network address to connect to the recorder (host IP address or DNS name). */
  address?: InputMaybe<Scalars['String']['input']>;
  /** Resource custom description which is visible for user, optional. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Is resource enabled or disabled. */
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Unique identifier of the resource object (GUID string). */
  id: Scalars['String']['input'];
  /** Network address for multicasting (host IP address or DNS name). */
  multicastAddress?: InputMaybe<Scalars['String']['input']>;
  /** Resource display name which is visible for user. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Network port to connect to the recorder. */
  port?: InputMaybe<Scalars['Int']['input']>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version: Scalars['String']['input'];
};

/** Type to define video resolution (width x height). */
export type Resolution = {
  __typename?: 'Resolution';
  /** Video resolution height. */
  height: Scalars['Int']['output'];
  /** Video resolution width. */
  width: Scalars['Int']['output'];
};

/** Type to define video resolution (width x height). */
export type ResolutionFilterInput = {
  and?: InputMaybe<Array<ResolutionFilterInput>>;
  /** Video resolution height. */
  height?: InputMaybe<IntOperationFilterInput>;
  or?: InputMaybe<Array<ResolutionFilterInput>>;
  /** Video resolution width. */
  width?: InputMaybe<IntOperationFilterInput>;
};

/** Type to define video resolution (width x height). */
export type ResolutionInput = {
  /** Video resolution height. */
  height: Scalars['Int']['input'];
  /** Video resolution width. */
  width: Scalars['Int']['input'];
};

/** Type to define video resolution (width x height). */
export type ResolutionSortInput = {
  /** Video resolution height. */
  height?: InputMaybe<SortEnumType>;
  /** Video resolution width. */
  width?: InputMaybe<SortEnumType>;
};

/** Set motion mask alarm action resource definition. */
export type SetMotionMaskAlarmAction = IAlarmAction & {
  __typename?: 'SetMotionMaskAlarmAction';
  /** The name of the user who added this resource. */
  addedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was added. */
  addedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Identifier of the related destination component (digital output, video channel, etc.). */
  componentId: Scalars['String']['output'];
  /** The name of the user who deleted this resource. */
  deletedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was deleted. */
  deletedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Unique identifier of the resource object (GUID string). */
  id: Scalars['String']['output'];
  /** Alarm trigger type. */
  kind: Scalars['String']['output'];
  /** Motion mask identifier. */
  motionMaskId: Scalars['String']['output'];
  recorder: Recorder;
  /** Identifier of the parent recorder. */
  recorderId: Scalars['String']['output'];
  /** The version of the specification which the resource uses. */
  specVersion: Scalars['String']['output'];
  /** The name of the user who updated this resource. */
  updatedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was updated. */
  updatedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version: Scalars['String']['output'];
  videoChannel: VideoChannel;
};

/** The data type for the set motion mask action creation. */
export type SetMotionMaskAlarmActionCreateInput = {
  /** Identifier of the related video channel. */
  componentId: Scalars['String']['input'];
  /** Motion mask identifier. */
  motionMaskId: Scalars['String']['input'];
  /** Identifier of the parent recorder. */
  recorderId: Scalars['String']['input'];
};

/** The data type for the set motion mask action update. */
export type SetMotionMaskAlarmActionUpdateInput = {
  /** Identifier of the entity to update. */
  id: Scalars['String']['input'];
  /** Motion mask identifier. */
  motionMaskId?: InputMaybe<Scalars['String']['input']>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version: Scalars['String']['input'];
};

export enum SortEnumType {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringOperationFilterInput = {
  and?: InputMaybe<Array<StringOperationFilterInput>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ncontains?: InputMaybe<Scalars['String']['input']>;
  nendsWith?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nstartsWith?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<StringOperationFilterInput>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  addedAlarm: Alarm;
  addedAlarmAction: IAlarmAction;
  addedAlarmConfiguration: AlarmConfiguration;
  addedAlarmTrigger: IAlarmTrigger;
  addedDevice: Device;
  addedDigitalSource: DigitalSource;
  addedManyAlarmConfigurations: Array<AlarmConfiguration>;
  addedManyAlarms: Array<Alarm>;
  addedManyDevices: Array<Device>;
  addedManyDigitalSources: Array<DigitalSource>;
  addedManyProfiles: Array<Profile>;
  addedManyRecorders: Array<Recorder>;
  addedManyVideoChannels: Array<VideoChannel>;
  addedManyVideoStreams: Array<VideoStream>;
  addedProfile: Profile;
  addedProfileNode: IProfileNode;
  addedRecorder: Recorder;
  addedVideoChannel: VideoChannel;
  addedVideoStream: VideoStream;
  deletedAlarm: Alarm;
  deletedAlarmAction: IAlarmAction;
  deletedAlarmConfiguration: AlarmConfiguration;
  deletedAlarmTrigger: IAlarmTrigger;
  deletedDevice: Device;
  deletedDigitalSource: DigitalSource;
  deletedManyAlarmActions: Array<IAlarmAction>;
  deletedManyAlarmConfigurations: Array<AlarmConfiguration>;
  deletedManyAlarmTriggers: Array<IAlarmTrigger>;
  deletedManyAlarms: Array<Alarm>;
  deletedManyDevices: Array<Device>;
  deletedManyDigitalSources: Array<DigitalSource>;
  deletedManyProfileNodes: Array<IProfileNode>;
  deletedManyProfiles: Array<Profile>;
  deletedManyRecorders: Array<Recorder>;
  deletedManyVideoChannels: Array<VideoChannel>;
  deletedManyVideoStreams: Array<VideoStream>;
  deletedProfile: Profile;
  deletedProfileNode: IProfileNode;
  deletedRecorder: Recorder;
  deletedVideoChannel: VideoChannel;
  deletedVideoStream: VideoStream;
  updatedAlarm: Alarm;
  updatedAlarmAction: IAlarmAction;
  updatedAlarmConfiguration: AlarmConfiguration;
  updatedAlarmTrigger: IAlarmTrigger;
  updatedDevice: Device;
  updatedDigitalSource: DigitalSource;
  updatedManyAlarmConfigurations: Array<AlarmConfiguration>;
  updatedManyAlarms: Array<Alarm>;
  updatedManyDevices: Array<Device>;
  updatedManyDigitalSources: Array<DigitalSource>;
  updatedManyProfiles: Array<Profile>;
  updatedManyRecorders: Array<Recorder>;
  updatedManyVideoChannels: Array<VideoChannel>;
  updatedManyVideoStreams: Array<VideoStream>;
  updatedProfile: Profile;
  updatedProfileNode: IProfileNode;
  updatedRecorder: Recorder;
  updatedVideoChannel: VideoChannel;
  updatedVideoStream: VideoStream;
};


export type SubscriptionAddedAlarmArgs = {
  alarmConfigurationIds: Array<Scalars['String']['input']>;
};


export type SubscriptionAddedManyAlarmsArgs = {
  alarmConfigurationIds: Array<Scalars['String']['input']>;
};


export type SubscriptionDeletedAlarmArgs = {
  alarmConfigurationIds: Array<Scalars['String']['input']>;
};


export type SubscriptionDeletedManyAlarmsArgs = {
  alarmConfigurationIds: Array<Scalars['String']['input']>;
};


export type SubscriptionUpdatedAlarmArgs = {
  alarmConfigurationIds: Array<Scalars['String']['input']>;
};


export type SubscriptionUpdatedManyAlarmsArgs = {
  alarmConfigurationIds: Array<Scalars['String']['input']>;
};

/** Text alarm trigger resource definition. */
export type TextAlarmTrigger = IAlarmTrigger & {
  __typename?: 'TextAlarmTrigger';
  /** Indicates if acknowledgment is required. */
  acknowledgeRequired: Scalars['Boolean']['output'];
  /** The name of the user who added this resource. */
  addedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was added. */
  addedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Identifier of the related source component (digital input, video channel, etc.). */
  componentId: Scalars['String']['output'];
  /** The name of the user who deleted this resource. */
  deletedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was deleted. */
  deletedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Unique event number for legacy recorders. */
  eventNumber: Scalars['Int']['output'];
  /** Unique identifier of the resource object (GUID string). */
  id: Scalars['String']['output'];
  /** Alarm trigger type. */
  kind: Scalars['String']['output'];
  /** Text alarm trigger operation. */
  operation: TextAlarmTriggerOperation;
  /** Identifier of the parent recorder. */
  recorderId: Scalars['String']['output'];
  /** The version of the specification which the resource uses. */
  specVersion: Scalars['String']['output'];
  /** Alarm trigger tolerance time in seconds. */
  toleranceSeconds: Scalars['Int']['output'];
  /** The name of the user who updated this resource. */
  updatedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was updated. */
  updatedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version: Scalars['String']['output'];
};

/** The data type for the text alarm trigger creation. */
export type TextAlarmTriggerCreateInput = {
  /** Indicates if acknowledgment is required. */
  acknowledgeRequired: Scalars['Boolean']['input'];
  /** Identifier of the related text channel. */
  componentId: Scalars['String']['input'];
  /** Text alarm trigger operation. */
  operation: TextAlarmTriggerOperation;
  /** Identifier of the parent recorder. */
  recorderId: Scalars['String']['input'];
  /** Alarm trigger tolerance time in seconds. */
  toleranceSeconds: Scalars['Int']['input'];
};

/** The type of the text alarm trigger operation. */
export enum TextAlarmTriggerOperation {
  ConnectionLost = 'CONNECTION_LOST',
  Data = 'DATA'
}

/** The data type for the text alarm trigger update. */
export type TextAlarmTriggerUpdateInput = {
  /** Indicates if acknowledgment is required. */
  acknowledgeRequired?: InputMaybe<Scalars['Boolean']['input']>;
  /** Identifier of the entity to update. */
  id: Scalars['String']['input'];
  /** Text alarm trigger operation. */
  operation?: InputMaybe<TextAlarmTriggerOperation>;
  /** Alarm trigger tolerance time in seconds. */
  toleranceSeconds?: InputMaybe<Scalars['Int']['input']>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version: Scalars['String']['input'];
};

/** Enumeration of the transport protocols. */
export enum Transport {
  Automatic = 'AUTOMATIC',
  RtPoverHttp = 'RT_POVER_HTTP',
  RtPoverHttps = 'RT_POVER_HTTPS',
  RtPoverMulticast = 'RT_POVER_MULTICAST',
  RtPoverRtsp = 'RT_POVER_RTSP',
  RtPoverUdp = 'RT_POVER_UDP'
}

export type TransportOperationFilterInput = {
  eq?: InputMaybe<Transport>;
  in?: InputMaybe<Array<Transport>>;
  neq?: InputMaybe<Transport>;
  nin?: InputMaybe<Array<Transport>>;
};

/** Video alarm trigger resource definition. */
export type VideoAlarmTrigger = IAlarmTrigger & {
  __typename?: 'VideoAlarmTrigger';
  /** Indicates if acknowledgment is required. */
  acknowledgeRequired: Scalars['Boolean']['output'];
  /** The name of the user who added this resource. */
  addedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was added. */
  addedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Identifier of the related source component (digital input, video channel, etc.). */
  componentId: Scalars['String']['output'];
  /** The name of the user who deleted this resource. */
  deletedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was deleted. */
  deletedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Unique event number for legacy recorders. */
  eventNumber: Scalars['Int']['output'];
  /** Unique identifier of the resource object (GUID string). */
  id: Scalars['String']['output'];
  /** Alarm trigger type. */
  kind: Scalars['String']['output'];
  /** The motion mask identifier (it is required for the 'Motion' and 'NoMotion' operations). */
  motionMaskId?: Maybe<Scalars['String']['output']>;
  /** Video alarm trigger operation. */
  operation: VideoAlarmTriggerOperation;
  recorder: Recorder;
  /** Identifier of the parent recorder. */
  recorderId: Scalars['String']['output'];
  /** The version of the specification which the resource uses. */
  specVersion: Scalars['String']['output'];
  /** Alarm trigger tolerance time in seconds. */
  toleranceSeconds: Scalars['Int']['output'];
  /** The name of the user who updated this resource. */
  updatedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was updated. */
  updatedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version: Scalars['String']['output'];
  videoChannel: VideoChannel;
};

/** The data type for the video alarm trigger creation. */
export type VideoAlarmTriggerCreateInput = {
  /** Indicates if acknowledgment is required. */
  acknowledgeRequired: Scalars['Boolean']['input'];
  /** Identifier of the related video channel. */
  componentId: Scalars['String']['input'];
  /** The motion mask identifier (it is required for the 'Motion' and 'NoMotion' operations). */
  motionMaskId?: InputMaybe<Scalars['String']['input']>;
  /** Video alarm trigger operation. */
  operation: VideoAlarmTriggerOperation;
  /** Identifier of the parent recorder. */
  recorderId: Scalars['String']['input'];
  /** Alarm trigger tolerance time in seconds. */
  toleranceSeconds: Scalars['Int']['input'];
};

/** The type of the video alarm trigger operation. */
export enum VideoAlarmTriggerOperation {
  Motion = 'MOTION',
  NoMotion = 'NO_MOTION',
  NoSignal = 'NO_SIGNAL'
}

/** The data type for the video alarm trigger update. */
export type VideoAlarmTriggerUpdateInput = {
  /** Indicates if acknowledgment is required. */
  acknowledgeRequired?: InputMaybe<Scalars['Boolean']['input']>;
  /** Identifier of the entity to update. */
  id: Scalars['String']['input'];
  /** The motion mask identifier (it is required for the 'Motion' and 'NoMotion' operations). */
  motionMaskId?: InputMaybe<Scalars['String']['input']>;
  /** Video alarm trigger operation. */
  operation?: InputMaybe<VideoAlarmTriggerOperation>;
  /** Alarm trigger tolerance time in seconds. */
  toleranceSeconds?: InputMaybe<Scalars['Int']['input']>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version: Scalars['String']['input'];
};

/** Template for a VideoChannel entity that is used with relation to the VideoChannelNode entity. */
export type VideoChannel = {
  __typename?: 'VideoChannel';
  /** The name of the user who added this resource. */
  addedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was added. */
  addedTime?: Maybe<Scalars['DateTime']['output']>;
  /** The name of the user who deleted this resource. */
  deletedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was deleted. */
  deletedTime?: Maybe<Scalars['DateTime']['output']>;
  device: Device;
  /** Identifier of parent device. */
  deviceId: Scalars['String']['output'];
  /** Unique identifier of the resource object (GUID string). */
  id: Scalars['ID']['output'];
  recorder: Recorder;
  /** Identifier of parent recorder. */
  recorderId: Scalars['String']['output'];
  /** The Base64 encoded reference image. */
  referenceImage?: Maybe<Scalars['String']['output']>;
  /** Video channel settings. */
  settings: VideoChannelSettings;
  /** The version of the specification which the resource uses. */
  specVersion: Scalars['String']['output'];
  /** Video channel status. */
  status: VideoChannelStatus;
  /** The name of the user who updated this resource. */
  updatedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was updated. */
  updatedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version: Scalars['String']['output'];
  videoChannelNodes?: Maybe<VideoChannelNodesConnection>;
  videoStreams?: Maybe<VideoStreamsConnection>;
};


/** Template for a VideoChannel entity that is used with relation to the VideoChannelNode entity. */
export type VideoChannelVideoChannelNodesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<ProfileNodeSortInput>>;
  where?: InputMaybe<ProfileNodeFilterInput>;
};


/** Template for a VideoChannel entity that is used with relation to the VideoChannelNode entity. */
export type VideoChannelVideoStreamsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<VideoStreamSortInput>>;
  where?: InputMaybe<VideoStreamFilterInput>;
};

/** The data type for the video channel creation. */
export type VideoChannelCreateInput = {
  /** Resource custom description which is visible for user, optional. */
  description: Scalars['String']['input'];
  /** Identifier of parent device. */
  deviceId: Scalars['String']['input'];
  /** Is dewarping enabled for the video channel. */
  dewarpingEnabled: Scalars['Boolean']['input'];
  /** Is edge storage enabled for the channel (used for all streams with enabled recording). */
  edgeStorageEnabled: Scalars['Boolean']['input'];
  /** Is resource enabled or disabled. */
  enabled: Scalars['Boolean']['input'];
  /** Is multiple streaming enabled for the channel. */
  multipleStreamingEnabled: Scalars['Boolean']['input'];
  /** Resource display name which is visible for user. */
  name: Scalars['String']['input'];
  /** Identifier of parent recorder. */
  recorderId: Scalars['String']['input'];
  /** The Base64 encoded reference image. */
  referenceImage?: InputMaybe<Scalars['String']['input']>;
};

/** Video channel resource definition. */
export type VideoChannelFilterInput = {
  /** The name of the user who added this resource. */
  addedBy?: InputMaybe<StringOperationFilterInput>;
  /** The timestamp when the resource was added. */
  addedTime?: InputMaybe<DateTimeOperationFilterInput>;
  and?: InputMaybe<Array<VideoChannelFilterInput>>;
  /** The name of the user who deleted this resource. */
  deletedBy?: InputMaybe<StringOperationFilterInput>;
  /** The timestamp when the resource was deleted. */
  deletedTime?: InputMaybe<DateTimeOperationFilterInput>;
  /** Identifier of parent device. */
  deviceId?: InputMaybe<StringOperationFilterInput>;
  /** Unique identifier of the resource object (GUID string). */
  id?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<VideoChannelFilterInput>>;
  /** Identifier of parent recorder. */
  recorderId?: InputMaybe<StringOperationFilterInput>;
  /** The Base64 encoded reference image. */
  referenceImage?: InputMaybe<StringOperationFilterInput>;
  /** Video channel settings. */
  settings?: InputMaybe<VideoChannelSettingsFilterInput>;
  /** The version of the specification which the resource uses. */
  specVersion?: InputMaybe<StringOperationFilterInput>;
  /** Video channel status. */
  status?: InputMaybe<VideoChannelStatusFilterInput>;
  /** The name of the user who updated this resource. */
  updatedBy?: InputMaybe<StringOperationFilterInput>;
  /** The timestamp when the resource was updated. */
  updatedTime?: InputMaybe<DateTimeOperationFilterInput>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version?: InputMaybe<StringOperationFilterInput>;
};

/** Video channel profile node resource definition. */
export type VideoChannelNode = IProfileNode & {
  __typename?: 'VideoChannelNode';
  /** The name of the user who added this resource. */
  addedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was added. */
  addedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Identifier of the related alarm configuration. */
  componentId: Scalars['String']['output'];
  /** The name of the user who deleted this resource. */
  deletedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was deleted. */
  deletedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Profile node description which is visible for user, optional. */
  description: Scalars['String']['output'];
  /** Indicates if export of video channel node is allowed. */
  exportAllowed: Scalars['Boolean']['output'];
  /** The icon set number for the profile node icon. */
  iconSetNumber?: Maybe<Scalars['String']['output']>;
  /** Unique identifier of the resource object (GUID string). */
  id: Scalars['String']['output'];
  /** Profile node type. */
  kind: Scalars['String']['output'];
  /** Profile node name which is visible for user. */
  name: Scalars['String']['output'];
  /** If true, ignores PTZ warnings in video channel node. */
  noTakePTZWarning: Scalars['Boolean']['output'];
  /** Indicates if PTZ control opens automatically in video channel node. */
  openPTZControlAutomatically: Scalars['Boolean']['output'];
  /** Indicates if PTZ control opens when camera is selected in video channel node. */
  openPTZWhenCameraSelected: Scalars['Boolean']['output'];
  /** Profile node parent node identifier. */
  parentNodeId?: Maybe<Scalars['String']['output']>;
  /** Indicates if playback is allowed. */
  playbackAllowed: Scalars['Boolean']['output'];
  /** Indicated the primary action for the video channel node. */
  primaryAction: PrimaryAction;
  profile: Profile;
  /** Profile node profile identifier. */
  profileId: Scalars['String']['output'];
  /** Indicates if PTZ control in video channel node is allowed. */
  ptzAllowed: Scalars['Boolean']['output'];
  /** Indicates the closing time of PTZ control in video channel node. */
  ptzCloseTime?: Maybe<Scalars['DateTime']['output']>;
  /** Indicates if realtime video channel node is allowed. */
  realtimeAllowed: Scalars['Boolean']['output'];
  /** Number of the shortcut. */
  shortcutNumber: Scalars['Int']['output'];
  /** The version of the specification which the resource uses. */
  specVersion: Scalars['String']['output'];
  /** Indicates if PTZ owhership control in video channel node is on. */
  takePTZOwnership: Scalars['Boolean']['output'];
  /** The name of the user who updated this resource. */
  updatedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was updated. */
  updatedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version: Scalars['String']['output'];
  videoChannel: VideoChannel;
};

/** The data type for the video channel profile node creation. */
export type VideoChannelNodeCreateInput = {
  /** Identifier of the related video channel. */
  componentId: Scalars['String']['input'];
  /** Profile node description which is visible for user, optional. */
  description: Scalars['String']['input'];
  /** Indicates if export of video channel node is allowed. */
  exportAllowed: Scalars['Boolean']['input'];
  /** The icon set number for the profile node icon. */
  iconSetNumber?: InputMaybe<Scalars['String']['input']>;
  /** Profile node name which is visible for user. */
  name: Scalars['String']['input'];
  /** If true, ignores PTZ warnings in video channel node. */
  noTakePTZWarning: Scalars['Boolean']['input'];
  /** Indicates if PTZ control opens automatically in video channel node. */
  openPTZControlAutomatically: Scalars['Boolean']['input'];
  /** Indicates if PTZ control opens when camera is selected in video channel node. */
  openPTZWhenCameraSelected: Scalars['Boolean']['input'];
  /** Profile node parent node identifier. */
  parentNodeId?: InputMaybe<Scalars['String']['input']>;
  /** Indicates if playback is allowed. */
  playbackAllowed: Scalars['Boolean']['input'];
  /** Indicated the primary action for the video channel node. */
  primaryAction: PrimaryAction;
  /** Profile node profile identifier. */
  profileId: Scalars['String']['input'];
  /** Indicates if PTZ control in video channel node is allowed. */
  ptzAllowed: Scalars['Boolean']['input'];
  /** Indicates the closing time of PTZ control in video channel node. */
  ptzCloseTime?: InputMaybe<Scalars['DateTime']['input']>;
  /** Indicates if realtime video channel node is allowed. */
  realtimeAllowed: Scalars['Boolean']['input'];
  /** Indicates if PTZ owhership control in video channel node is on. */
  takePTZOwnership: Scalars['Boolean']['input'];
};

export type VideoChannelNodeUpdateInput = {
  /** Profile node description which is visible for user, optional. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Indicates if export of video channel node is allowed. */
  exportAllowed?: InputMaybe<Scalars['Boolean']['input']>;
  /** The icon set number for the profile node icon. */
  iconSetNumber?: InputMaybe<Scalars['String']['input']>;
  /** Unique identifier of the resource object (GUID string). */
  id: Scalars['String']['input'];
  /** Profile node name which is visible for user. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** If true, ignores PTZ warnings in video channel node. */
  noTakePTZWarning?: InputMaybe<Scalars['Boolean']['input']>;
  /** Indicates if PTZ control opens automatically in video channel node. */
  openPTZControlAutomatically?: InputMaybe<Scalars['Boolean']['input']>;
  /** Indicates if PTZ control opens when camera is selected in video channel node. */
  openPTZWhenCameraSelected?: InputMaybe<Scalars['Boolean']['input']>;
  /** Profile node parent node identifier. */
  parentNodeId?: InputMaybe<Scalars['String']['input']>;
  /** Indicates if playback is allowed. */
  playbackAllowed?: InputMaybe<Scalars['Boolean']['input']>;
  /** Indicated the primary action for the video channel node. */
  primaryAction?: InputMaybe<PrimaryAction>;
  /** Indicates if PTZ control in video channel node is allowed. */
  ptzAllowed?: InputMaybe<Scalars['Boolean']['input']>;
  /** Indicates the closing time of PTZ control in video channel node. */
  ptzCloseTime?: InputMaybe<Scalars['DateTime']['input']>;
  /** Indicates if realtime video channel node is allowed. */
  realtimeAllowed?: InputMaybe<Scalars['Boolean']['input']>;
  /** Indicates if PTZ owhership control in video channel node is on. */
  takePTZOwnership?: InputMaybe<Scalars['Boolean']['input']>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version: Scalars['String']['input'];
};

/** A connection to a list of items. */
export type VideoChannelNodesConnection = {
  __typename?: 'VideoChannelNodesConnection';
  /** A list of edges. */
  edges?: Maybe<Array<VideoChannelNodesEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Maybe<VideoChannelNode>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type VideoChannelNodesEdge = {
  __typename?: 'VideoChannelNodesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<VideoChannelNode>;
};

/** Video channel settings definition. */
export type VideoChannelSettings = {
  __typename?: 'VideoChannelSettings';
  /** Resource custom description which is visible for user, optional. */
  description: Scalars['String']['output'];
  /** Is dewarping enabled for the video channel. */
  dewarpingEnabled: Scalars['Boolean']['output'];
  /** Is edge storage enabled for the channel (used for all streams with enabled recording). */
  edgeStorageEnabled: Scalars['Boolean']['output'];
  /** Is resource enabled or disabled. */
  enabled: Scalars['Boolean']['output'];
  /** Is multiple streaming enabled for the channel. */
  multipleStreamingEnabled: Scalars['Boolean']['output'];
  /** Resource display name which is visible for user. */
  name: Scalars['String']['output'];
};

/** Video channel settings definition. */
export type VideoChannelSettingsFilterInput = {
  and?: InputMaybe<Array<VideoChannelSettingsFilterInput>>;
  /** Resource custom description which is visible for user, optional. */
  description?: InputMaybe<StringOperationFilterInput>;
  /** Is dewarping enabled for the video channel. */
  dewarpingEnabled?: InputMaybe<BooleanOperationFilterInput>;
  /** Is edge storage enabled for the channel (used for all streams with enabled recording). */
  edgeStorageEnabled?: InputMaybe<BooleanOperationFilterInput>;
  /** Is resource enabled or disabled. */
  enabled?: InputMaybe<BooleanOperationFilterInput>;
  /** Is multiple streaming enabled for the channel. */
  multipleStreamingEnabled?: InputMaybe<BooleanOperationFilterInput>;
  /** Resource display name which is visible for user. */
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<VideoChannelSettingsFilterInput>>;
};

/** Video channel settings definition. */
export type VideoChannelSettingsSortInput = {
  /** Resource custom description which is visible for user, optional. */
  description?: InputMaybe<SortEnumType>;
  /** Is dewarping enabled for the video channel. */
  dewarpingEnabled?: InputMaybe<SortEnumType>;
  /** Is edge storage enabled for the channel (used for all streams with enabled recording). */
  edgeStorageEnabled?: InputMaybe<SortEnumType>;
  /** Is resource enabled or disabled. */
  enabled?: InputMaybe<SortEnumType>;
  /** Is multiple streaming enabled for the channel. */
  multipleStreamingEnabled?: InputMaybe<SortEnumType>;
  /** Resource display name which is visible for user. */
  name?: InputMaybe<SortEnumType>;
};

/** Video channel resource definition. */
export type VideoChannelSortInput = {
  /** The name of the user who added this resource. */
  addedBy?: InputMaybe<SortEnumType>;
  /** The timestamp when the resource was added. */
  addedTime?: InputMaybe<SortEnumType>;
  /** The name of the user who deleted this resource. */
  deletedBy?: InputMaybe<SortEnumType>;
  /** The timestamp when the resource was deleted. */
  deletedTime?: InputMaybe<SortEnumType>;
  /** Identifier of parent device. */
  deviceId?: InputMaybe<SortEnumType>;
  /** Unique identifier of the resource object (GUID string). */
  id?: InputMaybe<SortEnumType>;
  /** Identifier of parent recorder. */
  recorderId?: InputMaybe<SortEnumType>;
  /** The Base64 encoded reference image. */
  referenceImage?: InputMaybe<SortEnumType>;
  /** Video channel settings. */
  settings?: InputMaybe<VideoChannelSettingsSortInput>;
  /** The version of the specification which the resource uses. */
  specVersion?: InputMaybe<SortEnumType>;
  /** Video channel status. */
  status?: InputMaybe<VideoChannelStatusSortInput>;
  /** The name of the user who updated this resource. */
  updatedBy?: InputMaybe<SortEnumType>;
  /** The timestamp when the resource was updated. */
  updatedTime?: InputMaybe<SortEnumType>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version?: InputMaybe<SortEnumType>;
};

/** Video channel status definition. */
export type VideoChannelStatus = {
  __typename?: 'VideoChannelStatus';
  /** The configuration condition of the video channel. */
  configured: Condition;
  /** The connection condition of the video channel. */
  connected: Condition;
};

/** Video channel status definition. */
export type VideoChannelStatusFilterInput = {
  and?: InputMaybe<Array<VideoChannelStatusFilterInput>>;
  /** The configuration condition of the video channel. */
  configured?: InputMaybe<ConditionFilterInput>;
  /** The connection condition of the video channel. */
  connected?: InputMaybe<ConditionFilterInput>;
  or?: InputMaybe<Array<VideoChannelStatusFilterInput>>;
};

/** Video channel status definition. */
export type VideoChannelStatusSortInput = {
  /** The configuration condition of the video channel. */
  configured?: InputMaybe<ConditionSortInput>;
  /** The connection condition of the video channel. */
  connected?: InputMaybe<ConditionSortInput>;
};

export type VideoChannelUpdateInput = {
  /** Resource custom description which is visible for user, optional. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Is dewarping enabled for the video channel. */
  dewarpingEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Is edge storage enabled for the channel (used for all streams with enabled recording). */
  edgeStorageEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Is resource enabled or disabled. */
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Unique identifier of the resource object (GUID string). */
  id: Scalars['String']['input'];
  /** Is multiple streaming enabled for the channel. */
  multipleStreamingEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Resource display name which is visible for user. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The Base64 encoded reference image. */
  referenceImage?: InputMaybe<Scalars['String']['input']>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version: Scalars['String']['input'];
};

/** A connection to a list of items. */
export type VideoChannelsConnection = {
  __typename?: 'VideoChannelsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<VideoChannelsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Maybe<VideoChannel>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type VideoChannelsEdge = {
  __typename?: 'VideoChannelsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<VideoChannel>;
};

/** Video recording alarm action resource definition. */
export type VideoRecordingAlarmAction = IAlarmAction & {
  __typename?: 'VideoRecordingAlarmAction';
  /** The name of the user who added this resource. */
  addedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was added. */
  addedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Identifier of the related destination component (digital output, video channel, etc.). */
  componentId: Scalars['String']['output'];
  /** The name of the user who deleted this resource. */
  deletedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was deleted. */
  deletedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Unique identifier of the resource object (GUID string). */
  id: Scalars['String']['output'];
  /** Alarm trigger type. */
  kind: Scalars['String']['output'];
  /** Number of seconds for post-recording (0 - post-recording is disabled). */
  postRecordingSeconds: Scalars['Int']['output'];
  /** Number of seconds for pre-recording (0 - pre-recording is disabled). */
  preRecordingSeconds: Scalars['Int']['output'];
  recorder: Recorder;
  /** Identifier of the parent recorder. */
  recorderId: Scalars['String']['output'];
  /** Framerate of the recorded video (if it is 0, then current framerate must be used). */
  recordingFramerate: Scalars['Int']['output'];
  /** Resolution of the recorded video (if it 0x0, then current video resolution must be used). */
  recordingResolution: Resolution;
  /** Number of seconds to record. */
  recordingSeconds: Scalars['Int']['output'];
  /** The version of the specification which the resource uses. */
  specVersion: Scalars['String']['output'];
  /** The name of the user who updated this resource. */
  updatedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was updated. */
  updatedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version: Scalars['String']['output'];
  videoChannel: VideoChannel;
};

/** The data type for the video recording alarm action creation. */
export type VideoRecordingAlarmActionCreateInput = {
  /** Identifier of the related video channel. */
  componentId: Scalars['String']['input'];
  /** Number of seconds for post-recording (0 - post-recording is disabled). */
  postRecordingSeconds: Scalars['Int']['input'];
  /** Number of seconds for pre-recording (0 - pre-recording is disabled). */
  preRecordingSeconds: Scalars['Int']['input'];
  /** Identifier of the parent recorder. */
  recorderId: Scalars['String']['input'];
  /** Framerate of the recorded video (if it is 0, then current framerate must be used). */
  recordingFramerate: Scalars['Int']['input'];
  /** Resolution of the recorded video. */
  recordingResolution: ResolutionInput;
  /** Number of seconds to record. */
  recordingSeconds: Scalars['Int']['input'];
};

/** The data type for the video recording alarm action update. */
export type VideoRecordingAlarmActionUpdateInput = {
  /** Identifier of the entity to update. */
  id: Scalars['String']['input'];
  /** Number of seconds for post-recording (0 - post-recording is disabled). */
  postRecordingSeconds?: InputMaybe<Scalars['Int']['input']>;
  /** Number of seconds for pre-recording (0 - pre-recording is disabled). */
  preRecordingSeconds?: InputMaybe<Scalars['Int']['input']>;
  /** Framerate of the recorded video (if it is 0, then current framerate must be used). */
  recordingFramerate?: InputMaybe<Scalars['Int']['input']>;
  /** Resolution of the recorded video (if it 0x0, then current video resolution must be used). */
  recordingResolution?: InputMaybe<ResolutionInput>;
  /** Number of seconds to record. */
  recordingSeconds?: InputMaybe<Scalars['Int']['input']>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version: Scalars['String']['input'];
};

/** Video stream resource definition. */
export type VideoStream = {
  __typename?: 'VideoStream';
  /** The name of the user who added this resource. */
  addedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was added. */
  addedTime?: Maybe<Scalars['DateTime']['output']>;
  /** The name of the user who deleted this resource. */
  deletedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was deleted. */
  deletedTime?: Maybe<Scalars['DateTime']['output']>;
  device: Device;
  /** Identifier of parent device. */
  deviceId: Scalars['String']['output'];
  /** Unique identifier of the resource object (GUID string). */
  id: Scalars['ID']['output'];
  recorder: Recorder;
  /** Identifier of parent recorder. */
  recorderId: Scalars['String']['output'];
  /** Video stream settings. */
  settings: VideoStreamSettings;
  /** The version of the specification which the resource uses. */
  specVersion: Scalars['String']['output'];
  /** Video stream status. */
  status: VideoStreamStatus;
  /** The name of the user who updated this resource. */
  updatedBy?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the resource was updated. */
  updatedTime?: Maybe<Scalars['DateTime']['output']>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version: Scalars['String']['output'];
  videoChannel: VideoChannel;
  /** Identifier of parent video channel. */
  videoChannelId: Scalars['String']['output'];
};

/** The data type for the video stream creation. */
export type VideoStreamCreateInput = {
  /** Bitrate value of the video stream. */
  bitrate: Scalars['Int']['input'];
  /** Bitrate mode of the video stream. */
  bitrateMode: BitrateMode;
  /** Compression format of the video stream. */
  compression: Compression;
  /** Control mode of the video stream. */
  controlMode: ControlMode;
  /** Resource custom description which is visible for user, optional. */
  description: Scalars['String']['input'];
  /** Identifier of parent device. */
  deviceId: Scalars['String']['input'];
  /** Is resource enabled or disabled. */
  enabled: Scalars['Boolean']['input'];
  /** Frame rate of the video stream (0 to disable). */
  framerate: Scalars['Int']['input'];
  /** Resource display name which is visible for user. */
  name: Scalars['String']['input'];
  /** Video quality of the video stream (in percents). */
  quality: Scalars['Int']['input'];
  /** Identifier of parent recorder. */
  recorderId: Scalars['String']['input'];
  /** Resolution of the video stream. */
  resolution: ResolutionInput;
  /** Transport protocol of the video stream. */
  transport: Transport;
  /** Identifier of parent video channel. */
  videoChannelId: Scalars['String']['input'];
};

/** Video stream resource definition. */
export type VideoStreamFilterInput = {
  /** The name of the user who added this resource. */
  addedBy?: InputMaybe<StringOperationFilterInput>;
  /** The timestamp when the resource was added. */
  addedTime?: InputMaybe<DateTimeOperationFilterInput>;
  and?: InputMaybe<Array<VideoStreamFilterInput>>;
  /** The name of the user who deleted this resource. */
  deletedBy?: InputMaybe<StringOperationFilterInput>;
  /** The timestamp when the resource was deleted. */
  deletedTime?: InputMaybe<DateTimeOperationFilterInput>;
  /** Identifier of parent device. */
  deviceId?: InputMaybe<StringOperationFilterInput>;
  /** Unique identifier of the resource object (GUID string). */
  id?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<VideoStreamFilterInput>>;
  /** Identifier of parent recorder. */
  recorderId?: InputMaybe<StringOperationFilterInput>;
  /** Video stream settings. */
  settings?: InputMaybe<VideoStreamSettingsFilterInput>;
  /** The version of the specification which the resource uses. */
  specVersion?: InputMaybe<StringOperationFilterInput>;
  /** Video stream status. */
  status?: InputMaybe<VideoStreamStatusFilterInput>;
  /** The name of the user who updated this resource. */
  updatedBy?: InputMaybe<StringOperationFilterInput>;
  /** The timestamp when the resource was updated. */
  updatedTime?: InputMaybe<DateTimeOperationFilterInput>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version?: InputMaybe<StringOperationFilterInput>;
  /** Identifier of parent video channel. */
  videoChannelId?: InputMaybe<StringOperationFilterInput>;
};

/** Video stream specification definition. */
export type VideoStreamSettings = {
  __typename?: 'VideoStreamSettings';
  /** Bitrate value of the video stream. */
  bitrate: Scalars['Int']['output'];
  /** Bitrate mode of the video stream. */
  bitrateMode: BitrateMode;
  /** Compression format of the video stream. */
  compression: Compression;
  /** Control mode of the video stream. */
  controlMode: ControlMode;
  /** Resource custom description which is visible for user, optional. */
  description: Scalars['String']['output'];
  /** Is resource enabled or disabled. */
  enabled: Scalars['Boolean']['output'];
  /** Frame rate of the video stream (0 to disable). */
  framerate: Scalars['Int']['output'];
  /** Resource display name which is visible for user. */
  name: Scalars['String']['output'];
  /** Video quality of the video stream (in percents). */
  quality: Scalars['Int']['output'];
  /** Resolution of the video stream. */
  resolution: Resolution;
  /** Transport protocol of the video stream. */
  transport: Transport;
};

/** Video stream specification definition. */
export type VideoStreamSettingsFilterInput = {
  and?: InputMaybe<Array<VideoStreamSettingsFilterInput>>;
  /** Bitrate value of the video stream. */
  bitrate?: InputMaybe<IntOperationFilterInput>;
  /** Bitrate mode of the video stream. */
  bitrateMode?: InputMaybe<BitrateModeOperationFilterInput>;
  /** Compression format of the video stream. */
  compression?: InputMaybe<CompressionOperationFilterInput>;
  /** Control mode of the video stream. */
  controlMode?: InputMaybe<ControlModeOperationFilterInput>;
  /** Resource custom description which is visible for user, optional. */
  description?: InputMaybe<StringOperationFilterInput>;
  /** Is resource enabled or disabled. */
  enabled?: InputMaybe<BooleanOperationFilterInput>;
  /** Frame rate of the video stream (0 to disable). */
  framerate?: InputMaybe<IntOperationFilterInput>;
  /** Resource display name which is visible for user. */
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<VideoStreamSettingsFilterInput>>;
  /** Video quality of the video stream (in percents). */
  quality?: InputMaybe<IntOperationFilterInput>;
  /** Resolution of the video stream. */
  resolution?: InputMaybe<ResolutionFilterInput>;
  /** Transport protocol of the video stream. */
  transport?: InputMaybe<TransportOperationFilterInput>;
};

/** Video stream specification definition. */
export type VideoStreamSettingsSortInput = {
  /** Bitrate value of the video stream. */
  bitrate?: InputMaybe<SortEnumType>;
  /** Bitrate mode of the video stream. */
  bitrateMode?: InputMaybe<SortEnumType>;
  /** Compression format of the video stream. */
  compression?: InputMaybe<SortEnumType>;
  /** Control mode of the video stream. */
  controlMode?: InputMaybe<SortEnumType>;
  /** Resource custom description which is visible for user, optional. */
  description?: InputMaybe<SortEnumType>;
  /** Is resource enabled or disabled. */
  enabled?: InputMaybe<SortEnumType>;
  /** Frame rate of the video stream (0 to disable). */
  framerate?: InputMaybe<SortEnumType>;
  /** Resource display name which is visible for user. */
  name?: InputMaybe<SortEnumType>;
  /** Video quality of the video stream (in percents). */
  quality?: InputMaybe<SortEnumType>;
  /** Resolution of the video stream. */
  resolution?: InputMaybe<ResolutionSortInput>;
  /** Transport protocol of the video stream. */
  transport?: InputMaybe<SortEnumType>;
};

/** Video stream resource definition. */
export type VideoStreamSortInput = {
  /** The name of the user who added this resource. */
  addedBy?: InputMaybe<SortEnumType>;
  /** The timestamp when the resource was added. */
  addedTime?: InputMaybe<SortEnumType>;
  /** The name of the user who deleted this resource. */
  deletedBy?: InputMaybe<SortEnumType>;
  /** The timestamp when the resource was deleted. */
  deletedTime?: InputMaybe<SortEnumType>;
  /** Identifier of parent device. */
  deviceId?: InputMaybe<SortEnumType>;
  /** Unique identifier of the resource object (GUID string). */
  id?: InputMaybe<SortEnumType>;
  /** Identifier of parent recorder. */
  recorderId?: InputMaybe<SortEnumType>;
  /** Video stream settings. */
  settings?: InputMaybe<VideoStreamSettingsSortInput>;
  /** The version of the specification which the resource uses. */
  specVersion?: InputMaybe<SortEnumType>;
  /** Video stream status. */
  status?: InputMaybe<VideoStreamStatusSortInput>;
  /** The name of the user who updated this resource. */
  updatedBy?: InputMaybe<SortEnumType>;
  /** The timestamp when the resource was updated. */
  updatedTime?: InputMaybe<SortEnumType>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version?: InputMaybe<SortEnumType>;
  /** Identifier of parent video channel. */
  videoChannelId?: InputMaybe<SortEnumType>;
};

/** Video stream status definition. */
export type VideoStreamStatus = {
  __typename?: 'VideoStreamStatus';
  /** The configuration condition of the video stream. */
  configured: Condition;
  /** The connection condition of the video stream. */
  connected: Condition;
  /** The creating condition of the video stream. */
  created: Condition;
};

/** Video stream status definition. */
export type VideoStreamStatusFilterInput = {
  and?: InputMaybe<Array<VideoStreamStatusFilterInput>>;
  /** The configuration condition of the video stream. */
  configured?: InputMaybe<ConditionFilterInput>;
  /** The connection condition of the video stream. */
  connected?: InputMaybe<ConditionFilterInput>;
  /** The creating condition of the video stream. */
  created?: InputMaybe<ConditionFilterInput>;
  or?: InputMaybe<Array<VideoStreamStatusFilterInput>>;
};

/** Video stream status definition. */
export type VideoStreamStatusSortInput = {
  /** The configuration condition of the video stream. */
  configured?: InputMaybe<ConditionSortInput>;
  /** The connection condition of the video stream. */
  connected?: InputMaybe<ConditionSortInput>;
  /** The creating condition of the video stream. */
  created?: InputMaybe<ConditionSortInput>;
};

export type VideoStreamUpdateInput = {
  /** Bitrate value of the video stream. */
  bitrate?: InputMaybe<Scalars['Int']['input']>;
  /** Bitrate mode of the video stream. */
  bitrateMode?: InputMaybe<BitrateMode>;
  /** Compression format of the video stream. */
  compression?: InputMaybe<Compression>;
  /** Control mode of the video stream. */
  controlMode?: InputMaybe<ControlMode>;
  /** Resource custom description which is visible for user, optional. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Is resource enabled or disabled. */
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Frame rate of the video stream (0 to disable). */
  framerate?: InputMaybe<Scalars['Int']['input']>;
  /** Unique identifier of the resource object (GUID string). */
  id: Scalars['String']['input'];
  /** Resource display name which is visible for user. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Video quality of the video stream (in percents). */
  quality?: InputMaybe<Scalars['Int']['input']>;
  /** Resolution of the video stream. */
  resolution?: InputMaybe<ResolutionInput>;
  /** Transport protocol of the video stream. */
  transport?: InputMaybe<Transport>;
  /** Version of resource object, is used for optimistic concurrency control. */
  version: Scalars['String']['input'];
};

/** A connection to a list of items. */
export type VideoStreamsConnection = {
  __typename?: 'VideoStreamsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<VideoStreamsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Maybe<VideoStream>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type VideoStreamsEdge = {
  __typename?: 'VideoStreamsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<VideoStream>;
};

export type ListProfileNodesQueryVariables = Exact<{
  parentNodeId?: InputMaybe<Scalars['String']['input']>;
  first: Scalars['Int']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
}>;


export type ListProfileNodesQuery = { __typename?: 'Query', listProfileNodes?: { __typename?: 'ListProfileNodesConnection', edges?: Array<{ __typename?: 'ListProfileNodesEdge', cursor: string, node:
        | { __typename?: 'AlarmNode', id: string, kind: string, name: string, parentNodeId?: string | null }
        | { __typename?: 'DigitalInputNode', id: string, kind: string, name: string, parentNodeId?: string | null }
        | { __typename?: 'DigitalOutputNode', id: string, kind: string, name: string, parentNodeId?: string | null }
        | { __typename?: 'FolderNode', id: string, kind: string, name: string, parentNodeId?: string | null }
        | { __typename?: 'VideoChannelNode', id: string, kind: string, name: string, parentNodeId?: string | null }
       }> | null, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } } | null };


export const ListProfileNodesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListProfileNodes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"parentNodeId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listProfileNodes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"parentNodeId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"parentNodeId"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"parentNodeId"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}}]} as unknown as DocumentNode<ListProfileNodesQuery, ListProfileNodesQueryVariables>;