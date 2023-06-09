import type { ConfigModel, ThemeNodeModel } from './themes.model'
import { themesApiFixture } from '@/__fixtures__/themes.api.fixture'
import { useConfigStore } from '@/stores/config.store'
import { type LayerId } from '@/stores/map.store.model'

export default function useThemes() {
  function findById(id: LayerId, node?: ThemeNodeModel): ThemeNodeModel | undefined {
    return findByIdOrName(id, undefined, node)
  }

  function findByName(name: string, node?: ThemeNodeModel): ThemeNodeModel | undefined {
    return findByIdOrName(undefined, name, node)
  }

  function findByIdOrName(
    id?: LayerId,
    name?: string,
    node?: ThemeNodeModel
  ): ThemeNodeModel | undefined {
    const { theme } = useConfigStore()

    node = node || theme
    if ((id && node?.id === id) || (name && node?.name === name)) {
      return node
    } else if (node?.children) {
      for (const child of node.children) {
        const match = findByIdOrName(id, name, child)
        if (match) {
          return match
        }
      }
    }
  }

  function findBgLayerById(id: LayerId) {
    const { bgLayers } = useConfigStore()

    return bgLayers.find((l) => l.id === id)
  }

  function findBgLayerByName(name: string) {
    const { bgLayers } = useConfigStore()

    return bgLayers.find((l) => l.name === name)
  }

  function setTheme(name: string) {
    const { setTheme } = useConfigStore()

    setTheme(name)
  }

  async function fetchThemes(): Promise<ConfigModel> {
    return new Promise((resolve) => resolve(themesApiFixture()))
  }

  return {
    findById,
    findByName,
    findBgLayerById,
    findBgLayerByName,
    setTheme,
    fetchThemes
  }
}
