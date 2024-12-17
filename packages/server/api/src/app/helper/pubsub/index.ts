import { isNil } from '@activepieces/shared'
import { createRedisClient } from '../../database/redis-connection'
import { memoryPubSub } from './memory-pubsub'
import { redisPubSub } from './redis-pubsub'
import { QueueMode, system } from '../system/system'
import { AppSystemProp } from '../system/system-prop'

const queueMode = system.getOrThrow<QueueMode>(AppSystemProp.QUEUE_MODE)

let _pubsub: typeof memoryPubSub | null = null

export const pubsub = () => {
    if (!isNil(_pubsub)) {
        return _pubsub
    }

    _pubsub = queueMode === QueueMode.MEMORY
        ? memoryPubSub
        : redisPubSub(createRedisClient(), createRedisClient())

    return _pubsub
}