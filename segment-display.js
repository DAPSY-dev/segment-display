class SegmentDisplay {
  #charToSegmentsMap = null
  #segmentOnClassName = null
  #initClassName = null

  constructor(element) {
    this.element = element
    this.#segmentOnClassName = 'is-on'
    // prettier-ignore
    this.#charToSegmentsMap = {
      segmentName: ['a', 'b', 'c', 'd', 'e', 'f', 'g1', 'g2', 'h', 'i', 'j', 'k', 'l', 'm'],
                0: [ 1 ,  1 ,  1 ,  1 ,  1 ,  1 ,  0  ,  0  ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ],
                1: [ 0 ,  1 ,  1 ,  0 ,  0 ,  0 ,  0  ,  0  ,  0 ,  0 ,  1 ,  0 ,  0 ,  0 ],
                2: [ 1 ,  1 ,  0 ,  1 ,  1 ,  0 ,  1  ,  1  ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ],
                3: [ 1 ,  1 ,  1 ,  1 ,  0 ,  0 ,  0  ,  1  ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ],
                4: [ 0 ,  1 ,  1 ,  0 ,  0 ,  1 ,  1  ,  1  ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ],
                5: [ 1 ,  0 ,  1 ,  1 ,  0 ,  1 ,  1  ,  1  ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ],
                6: [ 1 ,  0 ,  1 ,  1 ,  1 ,  1 ,  1  ,  1  ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ],
                7: [ 1 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0  ,  0  ,  0 ,  0 ,  1 ,  0 ,  1 ,  0 ],
                8: [ 1 ,  1 ,  1 ,  1 ,  1 ,  1 ,  1  ,  1  ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ],
                9: [ 1 ,  1 ,  1 ,  0 ,  0 ,  1 ,  1  ,  1  ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ],
                a: [ 1 ,  1 ,  1 ,  0 ,  1 ,  1 ,  1  ,  1  ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ],
                b: [ 1 ,  1 ,  1 ,  1 ,  0 ,  0 ,  0  ,  1  ,  0 ,  1 ,  0 ,  0 ,  1 ,  0 ],
                c: [ 1 ,  0 ,  0 ,  1 ,  1 ,  1 ,  0  ,  0  ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ],
                d: [ 1 ,  1 ,  1 ,  1 ,  0 ,  0 ,  0  ,  0  ,  0 ,  1 ,  0 ,  0 ,  1 ,  0 ],
                e: [ 1 ,  0 ,  0 ,  1 ,  1 ,  1 ,  1  ,  1  ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ],
                f: [ 1 ,  0 ,  0 ,  0 ,  1 ,  1 ,  1  ,  1  ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ],
                g: [ 1 ,  0 ,  1 ,  1 ,  1 ,  1 ,  0  ,  1  ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ],
                h: [ 0 ,  1 ,  1 ,  0 ,  1 ,  1 ,  1  ,  1  ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ],
                i: [ 1 ,  0 ,  0 ,  1 ,  0 ,  0 ,  0  ,  0  ,  0 ,  1 ,  0 ,  0 ,  1 ,  0 ],
                j: [ 0 ,  1 ,  1 ,  1 ,  1 ,  0 ,  0  ,  0  ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ],
                k: [ 0 ,  0 ,  0 ,  0 ,  1 ,  1 ,  1  ,  0  ,  0 ,  0 ,  1 ,  0 ,  0 ,  1 ],
                l: [ 0 ,  0 ,  0 ,  1 ,  1 ,  1 ,  0  ,  0  ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ],
                m: [ 0 ,  1 ,  1 ,  0 ,  1 ,  1 ,  0  ,  0  ,  1 ,  0 ,  1 ,  0 ,  0 ,  0 ],
                n: [ 0 ,  1 ,  1 ,  0 ,  1 ,  1 ,  0  ,  0  ,  1 ,  0 ,  0 ,  0 ,  0 ,  1 ],
                o: [ 1 ,  1 ,  1 ,  1 ,  1 ,  1 ,  0  ,  0  ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ],
                p: [ 1 ,  1 ,  0 ,  0 ,  1 ,  1 ,  1  ,  1  ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ],
                q: [ 1 ,  1 ,  1 ,  1 ,  1 ,  1 ,  0  ,  0  ,  0 ,  0 ,  0 ,  0 ,  0 ,  1 ],
                r: [ 1 ,  1 ,  0 ,  0 ,  1 ,  1 ,  1  ,  1  ,  0 ,  0 ,  0 ,  0 ,  0 ,  1 ],
                s: [ 1 ,  0 ,  1 ,  1 ,  0 ,  0 ,  0  ,  1  ,  1 ,  0 ,  0 ,  0 ,  0 ,  0 ],
                t: [ 1 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0  ,  0  ,  0 ,  1 ,  0 ,  0 ,  1 ,  0 ],
                u: [ 0 ,  1 ,  1 ,  1 ,  1 ,  1 ,  0  ,  0  ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ],
                v: [ 0 ,  0 ,  0 ,  0 ,  1 ,  1 ,  0  ,  0  ,  0 ,  0 ,  1 ,  1 ,  0 ,  0 ],
                w: [ 0 ,  1 ,  1 ,  0 ,  1 ,  1 ,  0  ,  0  ,  0 ,  0 ,  0 ,  1 ,  0 ,  1 ],
                x: [ 0 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0  ,  0  ,  1 ,  0 ,  1 ,  1 ,  0 ,  1 ],
                y: [ 0 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0  ,  0  ,  1 ,  0 ,  1 ,  0 ,  1 ,  0 ],
                z: [ 1 ,  0 ,  0 ,  1 ,  0 ,  0 ,  0  ,  0  ,  0 ,  0 ,  1 ,  1 ,  0 ,  0 ],
    }
    this.#initClassName = 'is-init-segment-display'
    this.init()
  }

  init() {
    if (this.element.classList.contains(this.#initClassName)) {
      console.error(`SegmentDisplay is already initialized (id): ${this.element.dataset.id}`)
      return
    }
    this.element.classList.add(this.#initClassName)
  }

  #generateHTML() {
    const htmlString = /* HTML */ `
      <div class="segment-display">
        <div class="segment-display__a"></div>
        <div class="segment-display__b"></div>
        <div class="segment-display__c"></div>
        <div class="segment-display__d"></div>
        <div class="segment-display__e"></div>
        <div class="segment-display__f"></div>
        <div class="segment-display__g1"></div>
        <div class="segment-display__g2"></div>
        <div class="segment-display__h"></div>
        <div class="segment-display__i"></div>
        <div class="segment-display__j"></div>
        <div class="segment-display__k"></div>
        <div class="segment-display__l"></div>
        <div class="segment-display__m"></div>
        <div class="segment-display__dp"></div>
      </div>
    `
    this.element.insertAdjacentHTML('beforeend', htmlString)
    return this.element.lastElementChild
  }

  write(string) {
    this.element.innerHTML = ''
    this.element.insertAdjacentHTML('beforeend', /* HTML */ ` <div class="sr-only">${string}</div> `)
    const stringArray = string.split('')
    let segmentParentEl = null
    for (const charStr of stringArray) {
      const character = charStr.toLowerCase()
      if (character === ' ') {
        segmentParentEl = this.#generateHTML()
        continue
      }
      if (character === '.') {
        if (segmentParentEl === null) {
          continue
        }
        const segmentEl = segmentParentEl.querySelector('.segment-display__dp')
        segmentEl.classList.add(this.#segmentOnClassName)
        continue
      }
      segmentParentEl = this.#generateHTML()
      for (const [index, segment] of this.#charToSegmentsMap[character].entries()) {
        const segmentName = this.#charToSegmentsMap.segmentName[index]
        if (segment === 1) {
          const segmentEl = segmentParentEl.querySelector(`.segment-display__${segmentName}`)
          segmentEl.classList.add(this.#segmentOnClassName)
        }
      }
    }
  }

  destroy() {
    this.element.innerHTML = ''
    this.element.classList.remove(this.#initClassName)
  }
}
