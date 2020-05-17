package main

import (
	"bufio"
	"flag"
	"fmt"
	"log"
	"os"
	"regexp"
	"strings"

	"github.com/roasbeef/btcutil/bech32"
)

var from string
var to string

func init() {
	flag.StringVar(&from, "from", "enigma", "from prefix")
	flag.StringVar(&to, "to", "secret", "to prefix")

	flag.Parse()
}

func main() {
	fi, _ := os.Stdin.Stat()

	if (fi.Mode() & os.ModeCharDevice) != 0 {
		log.Fatalln("Cannot read data from stdin.")
	}

	bech32Regex := regexp.MustCompile(fmt.Sprintf(`%s(pub|valoper|valoperpub|valcons|valconspub)?1[02-9ac-hj-np-z]{6,}\b`, from))

	scanner := bufio.NewScanner(os.Stdin)
	for scanner.Scan() {
		line := scanner.Text()
		oldAddressInLine := bech32Regex.FindAllString(line, -1)

		for _, oldAddress := range oldAddressInLine {
			prefix, canonical, err := bech32.Decode(oldAddress)
			if err != nil {
				log.Printf(`Error parsing "%v" as bech32 address: %v`, oldAddress, err)
				continue
			}

			newPrefix := strings.ReplaceAll(prefix, from, to)
			newAddress, err := bech32.Encode(newPrefix, canonical)
			if err != nil {
				log.Printf(`Error converting "%v" to "%v" prefix: %v`, oldAddress, to, err)
				continue
			}

			line = strings.ReplaceAll(line, oldAddress, newAddress)
		}

		fmt.Println(line)
	}

	if err := scanner.Err(); err != nil {
		log.Fatal(err)
	}
}
