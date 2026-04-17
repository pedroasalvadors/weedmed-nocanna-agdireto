// Generates public/og-image.png (1200x630) via @napi-rs/canvas
// Run: node scripts/generate-og.mjs

import { createCanvas } from '@napi-rs/canvas'
import { writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT = join(__dirname, '../public/og-image.png')

const W = 1200
const H = 630

const canvas = createCanvas(W, H)
const ctx = canvas.getContext('2d')

// Background gradient
const bg = ctx.createLinearGradient(0, 0, W * 0.7, H)
bg.addColorStop(0, '#2D1B69')
bg.addColorStop(1, '#4c2ba8')
ctx.fillStyle = bg
ctx.fillRect(0, 0, W, H)

// Decorative circle top-right
ctx.beginPath()
ctx.arc(W - 60, -60, 280, 0, Math.PI * 2)
ctx.fillStyle = 'rgba(255,255,255,0.04)'
ctx.fill()

ctx.beginPath()
ctx.arc(W - 120, 80, 160, 0, Math.PI * 2)
ctx.fillStyle = 'rgba(255,255,255,0.04)'
ctx.fill()

// Green accent bar at bottom
ctx.fillStyle = '#00B383'
ctx.fillRect(0, H - 8, W, 8)

// Logo "weemed"
ctx.font = 'bold 64px Arial'
ctx.fillStyle = '#ffffff'
ctx.fillText('weemed', 80, 130)

// Green dot on the "d" accent
ctx.beginPath()
ctx.arc(80 + 310, 90, 12, 0, Math.PI * 2)
ctx.fillStyle = '#00B383'
ctx.fill()

// Divider line
ctx.fillStyle = 'rgba(255,255,255,0.15)'
ctx.fillRect(80, 155, 500, 2)

// Headline
ctx.font = 'bold 58px Arial'
ctx.fillStyle = '#ffffff'
ctx.fillText('Você não precisa viver', 80, 240)
ctx.fillText('com dor, insônia', 80, 310)
ctx.fillText('ou ansiedade.', 80, 380)

// Subtitle
ctx.font = '28px Arial'
ctx.fillStyle = 'rgba(255,255,255,0.75)'
ctx.fillText('Avaliação médica online · a partir de R$50', 80, 440)

// Badge pill
const badgeX = 80
const badgeY = 490
const badgeW = 540
const badgeH = 54
const r = badgeH / 2

ctx.beginPath()
ctx.moveTo(badgeX + r, badgeY)
ctx.lineTo(badgeX + badgeW - r, badgeY)
ctx.arc(badgeX + badgeW - r, badgeY + r, r, -Math.PI / 2, Math.PI / 2)
ctx.lineTo(badgeX + r, badgeY + badgeH)
ctx.arc(badgeX + r, badgeY + r, r, Math.PI / 2, -Math.PI / 2)
ctx.closePath()
ctx.fillStyle = '#00B383'
ctx.fill()

ctx.font = 'bold 22px Arial'
ctx.fillStyle = '#ffffff'
ctx.fillText('+3.000 pacientes atendidos  |  4.9/5 Google', badgeX + 22, badgeY + 36)

const buf = canvas.toBuffer('image/png')
writeFileSync(OUT, buf)
console.log('OG image written to', OUT)
